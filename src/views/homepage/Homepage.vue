<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="HOMEPAGE CUSTOMIZATION" />
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">

      <!-- Hero Slider -->
      <base-block title="Hero Slider" content-full>
        <slider-tabs/>
      </base-block>
      <!-- END Hero Slider -->

      <!-- Hero Banner -->
      <base-block title="Hero Banner" content-full>
        <banner-form/>
      </base-block>
      <!-- END Hero Banner -->

      <!-- Top Categories -->
      <base-block title="Top Categories" content-full>
        <categories-form type="top" :max="3" :min="3"/>
      </base-block>
      <!-- END Top Categories -->

      <!-- Featured Categories -->
      <base-block title="Featured Categories" content-full>
        <categories-form type="featured"/>
      </base-block>
      <!-- END Featured Categories -->

    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
import BannerForm from "@/views/homepage/BannerForm";
import CategoriesForm from "@/views/homepage/CategoriesForm";
import SliderTabs from "@/views/homepage/SliderTabs";

export default {
  name: 'Homepage',
  components: {SliderTabs, CategoriesForm, BannerForm},
  data () {
    return {
    }
  }
}
</script>
