<template>
  <b-form>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Title" label-for="title 2">
      <b-form-input id="title" v-model="slide.title"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Subtitle" label-for="subtitle">
      <b-form-input id="subtitle" v-model="slide.subtitle"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Extra Subtitle" label-for="extra">
      <b-form-input id="extra" v-model="slide.extraSub"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Discount" label-for="discount">
      <b-form-input id="discount" v-model="slide.discount"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Call to action" label-for="cta">
      <b-form-input id="cta" v-model="slide.cta"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Image" label-for="image">
      <b-form-file id="image"></b-form-file>
    </b-form-group>
    <b-btn class="btn-alt-primary btn" :disabled="loading" @click="editSlide">Apply changes
    <div class="spinner-border text-light ml-3" style="width: 1rem; height: 1rem;" v-if="loading"/>
  </b-btn>
    <b-alert variant="danger" class="animated d-flex align-items-center mt-5" :class="{fadeIn: alert, fadeOut: !alert}"
             :show="alert">
      <div class="flex-00-auto">
        <i class="fa fa-fw fa-times-circle"></i>
      </div>
      <div class="flex-fill ml-2">
        <p class="mb-0">Something went wrong</p>
      </div>
    </b-alert>
    <b-alert variant="success" class="animated d-flex align-items-center mt-5" :class="{fadeIn: success, fadeOut: !success}"
             :show="success">
      <div class="flex-00-auto">
        <i class="fa fa-fw fa-check"></i>
      </div>
      <div class="flex-fill ml-2">
        <p class="mb-0 text-capitalize">Banner updated successfully</p>
      </div>
    </b-alert>
  </b-form>
</template>
<script>
import Api, {baseUrl} from "@/api";

export default {
  name: 'SlideForm',
  data() {
    return {
      alert: false,
      loading: false,
      success: false,
      img: null
    }
  },
  props: {
    slide:{}
  },
  watch:{
    img(old){
      const reader = new FileReader();
      reader.onloadend = () => {
        this.slide.image = reader.result;
      }
      if (old)
        reader.readAsDataURL(old);
    },
  },
  methods: {
    async editSlide() {
      this.alert = false;
      this.loading = true;
      const url = baseUrl + '/config/slides' ;
      const update = {slide: this.slide, imgChanged: !!this.img};
      Api.patch(url, update).then(() => {
        this.success = true;
      }).catch(err => {
        this.alert = true;
      }).finally(() => {
        setTimeout(() => this.success = false, 3000)
        this.loading = false;
      })
    }
  }
}
</script>
