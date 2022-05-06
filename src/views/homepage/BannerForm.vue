<template>
  <b-form>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Title" label-for="title 2">
      <b-form-input id="title" v-model="banner.title"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Subtitle" label-for="subtitle">
      <b-form-input id="subtitle" v-model="banner.subtitle"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Discount" label-for="discount">
      <b-form-input id="discount" v-model="banner.discount"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Call to action" label-for="cta">
      <b-form-input id="cta" v-model="banner.cta"></b-form-input>
    </b-form-group>
    <b-form-group label-cols-sm="3" content-cols-sm="5" label="Image" label-for="image">
      <b-form-file id="image"></b-form-file>
    </b-form-group>
    <b-btn class="btn-alt-primary btn">Apply changes</b-btn>
  </b-form>
</template>
<script>
export default {
  name: 'BannerForm',
  props: {
    banner: {}
  }
}
</script>
