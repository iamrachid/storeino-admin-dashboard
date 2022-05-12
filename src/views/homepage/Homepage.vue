<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="HOMEPAGE CUSTOMIZATION" />
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">

      <!-- Hero Slider -->
      <base-block title="Hero Slider" content-full>
        <b-tabs class="block" nav-class="nav-tabs-alt" content-class="block-content">
          <b-tab v-for="item in slides" :key="item._id" :title="'Slide ' + item._id" active>
            <slide-form :slide="item"/>
          </b-tab>
        </b-tabs>
      </base-block>
      <!-- END Hero Slider -->

      <!-- Hero Banner -->
      <base-block title="Hero Banner" content-full>
        <banner-form :banner="banner"/>
      </base-block>
      <!-- END Hero Banner -->

      <!-- Top Categories -->
      <base-block title="Top Categories" content-full>
        <categories-form :categories="categories"/>
      </base-block>
      <!-- END Top Categories -->

    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
import {banner, slides} from "@/data/custumazation";
import SlideForm from "@/views/homepage/SlideForm";
import BannerForm from "@/views/homepage/BannerForm";
import {categories} from "@/data/categories";
import CategoriesForm from "@/views/homepage/CategoriesForm";

export default {
  name: 'Homepage',
  components: {CategoriesForm, BannerForm, SlideForm},
  data () {
    return {
      slides: slides,
      banner: banner,
      categories: categories.filter(item => item.level === 0 || item.level === 1)
    }
  }
}
</script>
