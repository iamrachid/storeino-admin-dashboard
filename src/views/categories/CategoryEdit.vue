<template>
<div class="content content-narrow">
  <base-block title="Add new Category" header-bg content-full>
    <b-form  @submit.prevent="edit">
      <b-form-group label="Category Name" label-for="category">
        <b-form-input id="category" v-model.trim="category.name" placeholder="" required></b-form-input>
      </b-form-group>
        <b-form-group label="Parent" label-for="parent">
          <b-form-select id="parent" v-model="category.parent" :options="options" required plain></b-form-select>
      </b-form-group>
      <b-form-group label="Banner Image" label-for="banner">
        <b-form-file id="banner" accept="image/*" plain v-model="banner"></b-form-file>
      </b-form-group>
      <base-block>
        <img class="img-fluid options-item" lazy :src="bannerUrl" alt="Image">
      </base-block>
      <button class="btn btn-alt-primary d-flex align-items-center" :disabled="loading">Update
        <div class="spinner-border text-light ml-3"  style="width: 1rem; height: 1rem;" v-if="loading" />
      </button>
    </b-form>
    <b-alert variant="success" class="animated d-flex align-items-center mt-5" :class="{fadeIn: alert, fadeOut: !alert}" :show="alert">
      <div class="flex-00-auto">
        <i class="fa fa-fw fa-check"></i>
      </div>
      <div class="flex-fill ml-2">
        <p class="mb-0">Category updated successfully</p>
      </div>
    </b-alert>
  </base-block>
</div>

</template>

<script>

import Api, {baseUrl} from "@/api";
export default {
  name: "CategoryEdit",
  data(){
    return {
      alert: false,
      loading: false,
      categories: [],
      category: {
        parent: null,
        name: null,
        banner: null
      },
      banner: null,
      bannerUrl: ''
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
    await this.getCategory(this.$route.params.slug);
  },
  methods: {
    async edit(){
      const url = baseUrl + '/category/' + this.$route.params.slug;
      this.loading = true;
      console.log(this.category)
      const response = await Api.patch(url, {
        ...this.category,
      });
        this.loading = false;
        this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000)
    },
    async getCategories() {
      const url = baseUrl + '/category';
      const response = await Api.get(url, {
        params: {
          limit: 0
        }
      });
      this.categories = response.data.result;
    },
    async getCategory(slug){
      const url = baseUrl + '/category/' + slug;
      const response = await Api.get(url);
      const category = response.data.result;
      this.bannerUrl = category.banner;
      this.category.name = category.name;
      this.category.parent = category.level === 0 ? category.slug : category.slug.split(':').slice(0, -1).join(':');
    }
  }
}
</script>
