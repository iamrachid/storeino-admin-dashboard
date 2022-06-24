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
      <b-row>
        <b-col>
          <b-form-group label="Banner Image" label-for="banner">
            <b-form-file id="banner" accept="image/*" plain v-model="banner"></b-form-file>
          </b-form-group>
          <base-block v-if="bannerUrl" >
            <img class="img-fluid options-item" lazy :src="bannerUrl" alt="Image">
          </base-block>
        </b-col>
        <b-col>
          <b-form-group label="Main Image" label-for="IMAGE">
            <b-form-file id="img" accept="image/*" plain v-model="img"></b-form-file>
          </b-form-group>
          <base-block v-if="imgUrl">
            <img class="img-fluid options-item" lazy :src="imgUrl" alt="Image">
          </base-block>
        </b-col>
      </b-row>
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
import login from "@/views/Login";
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
        banner: null,
        img: null
      },
      banner: null,
      img: null,
      imgUrl: '',
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

    img(old){
      console.log(old)
      const reader = new FileReader();
      reader.onloadend = () => {
        this.category.img = reader.result;
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
      Api.patch(url, {
        ...this.category,
      }).then(() => {
          this.loading = false;
          this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 3000)
      }).catch(err => console.log(err))
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
      this.imgUrl = category.img;
      this.category.name = category.name;
      this.category.parent = category.level === 0 ? category.slug : category.slug.split(':').slice(0, -1).join(':');
    }
  }
}
</script>
