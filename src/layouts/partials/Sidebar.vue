<template>
  <!-- Sidebar -->
  <!--
    Sidebar Mini Mode - Display Helper classes

    Adding 'smini-hide' class to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
    Adding 'smini-show' class to an element will make it visible (opacity: 1) when the sidebar is in mini mode
    If you would like to disable the transition animation, make sure to also add the 'no-transition' class to your element

    Adding 'smini-hidden' to an element will hide it when the sidebar is in mini mode
    Adding 'smini-visible' to an element will show it (display: inline-block) only when the sidebar is in mini mode
    Adding 'smini-visible-block' to an element will show it (display: block) only when the sidebar is in mini mode
    -->
  <simplebar id="sidebar" aria-label="Main Navigation">
    <slot>
      <!-- Side Header -->
      <div class="content-header bg-white-5">
        <!-- Logo -->
        <router-link to="/" class="font-w600 text-dual">
          <i class="fa fa-circle-notch text-primary"></i><span class="font-w700 font-size-h5 ml-1 smini-hide">admin</span>
        </router-link>
        <!-- END Logo -->

        <!-- Extra -->
        <div>
          <!-- Close Sidebar, Visible only on mobile screens -->
          <base-layout-modifier size="sm" variant="dual" action="sidebarClose" class="d-lg-none ml-2">
            <i class="fa fa-times"></i>
          </base-layout-modifier>
          <!-- END Close Sidebar -->
        </div>
        <!-- END Extra -->
      </div>
      <!-- END Side Header -->

      <!-- Side Navigation -->
      <div class="content-side content-side-full">
        <base-navigation :nodes="navigation"></base-navigation>
      </div>
      <!-- END Side Navigation -->
    </slot>
  </simplebar>
  <!-- END Sidebar -->
</template>

<script>
// SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
import simplebar from 'simplebar-vue'

// Get navigation data
import menuList from '@/data/menu'

export default {
  name: 'BaseSidebar',
  props: {
    classes: String
  },
  components: {
    simplebar
  },
  data () {
    return {
      // Get main navigation
      navigation: menuList.main
    }
  }
}
</script>
