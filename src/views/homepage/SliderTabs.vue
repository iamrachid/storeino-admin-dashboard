<template>
  <b-tabs class="block" nav-class="nav-tabs-alt" content-class="block-content">
    <b-tab v-for="item in slides" :key="item._id" :title="'Slide ' + item._id" :active="item.id == 1">
      <slide-form :slide="item"/>
    </b-tab>
  </b-tabs>
</template>
<script>
import SlideForm from "@/views/homepage/SlideForm"
import Api, {baseUrl} from "@/api";

export default {
  name: 'SliderTabs',
  data() {
    return {
      slides: []
    }
  },
  components: {SlideForm},
  methods:{

    async getSlides() {
      this.slide = [];
      const url = baseUrl + '/config/slides';
      const response = await Api.get(url);
      this.slides = response.data.results.slides;
    },
  },

  mounted() {
    this.getSlides();
  }
}
</script>
