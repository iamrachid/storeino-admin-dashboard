<template>
  <div class="content content-narrow">
    <base-block title="Add new Category" header-bg content-full>
      <b-form  @submit.prevent="addCategory">
        <b-form-group label="Category Name" label-for="category">
          <b-form-input id="category" v-model.trim="category.name" placeholder="" required></b-form-input>
        </b-form-group>
        <b-form-group label="Parent" label-for="parent">
          <b-form-select id="parent" v-model="category.parents" :options="options" required plain></b-form-select>
        </b-form-group>
        <b-form-group label="Banner Image" label-for="banner">
          <b-form-file id="banner" accept="image/*" plain v-model="banner"></b-form-file>
        </b-form-group>
        <button class="btn btn-alt-primary d-flex align-items-center" :disabled="loading">Add
          <div class="spinner-border text-light ml-3"  style="width: 1rem; height: 1rem;" v-if="loading" />
        </button>
      </b-form>
      <b-alert variant="danger" class="animated d-flex align-items-center mt-5" :class="{fadeIn: alert, fadeOut: !alert}" :show="alert">
        <div class="flex-00-auto">
          <i class="fa fa-fw fa-times-circle"></i>
        </div>
        <div class="flex-fill ml-2">
          <p class="mb-0">Category already exists, Please change its name or its parent</p>
        </div>
      </b-alert>
    </base-block>
  </div>

</template>

<script>

import Api, {baseUrl} from "@/api";
export default {
  name: "CategoryAdd",
  data(){
    return {
      alert: false,
      loading: false,
      categories: [],
      category: {
        parents: null,
        name: null,
        banner: null
      },
      banner: null
    }
  },
  computed: {
    options(){
      let catOptions = [{value: null, text: 'Select An Option', disabled: true}];
      this.categories.forEach(item => {
        const catOption = {
          text: item.name + ' (' + item.slug.split() + ')',
          value: item.slug,
          disabled: false
        };
        catOptions.push(catOption)
      })
      return catOptions;
    }

  },
  watch:{
    banner(old){
      console.log(old)
      const reader = new FileReader();
      reader.onloadend = () => {
        this.category.banner = reader.result;
      }
      if (old)
        reader.readAsDataURL(old);
    },
  },
  async mounted() {
    await this.getCategories();
  },
  methods: {
    async addCategory(){
      this.loading = true;
      this.alert = false;
      const url = baseUrl + '/category/';
      Api.post(url, {
        ...this.category,
      }).then((res)=>{
        this.$router.push(res.data.result.slug)
      }).catch(err => {
        this.loading = false;
        if (err.response.status === 409)
          this.alert = true;
      });
    },
    async getCategories() {
      const url = baseUrl + '/category';
      const response = await Api.get(url, {
        params: {
          limit: 0
        }
      });
      this.categories = response.data.result;
    }
  }
}
</script>
