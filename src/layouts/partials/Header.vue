<template>
  <!-- Header -->
  <header id="page-header">
    <slot>
      <!-- Header Content -->
      <div class="content-header">
        <!-- Left Section -->
        <div class="d-flex align-items-center">
          <!-- Toggle Sidebar -->
          <base-layout-modifier action="sidebarToggle" size="sm" variant="dual" class="mr-2 d-lg-none">
            <i class="fa fa-fw fa-bars"></i>
          </base-layout-modifier>
          <!-- END Toggle Sidebar -->

          <!-- Toggle Mini Sidebar -->
          <base-layout-modifier action="sidebarMiniToggle" size="sm" variant="dual" class="mr-2 d-none d-lg-inline-block">
            <i class="fa fa-fw fa-ellipsis-v"></i>
          </base-layout-modifier>
          <!-- END Toggle Mini Sidebar -->
        </div>
        <!-- END Left Section -->

        <!-- Right Section -->
        <div class="d-flex align-items-center">
          <!-- User Dropdown -->
          <b-dropdown size="sm" variant="dual" class="d-inline-block ml-2" menu-class="p-0 border-0 font-size-sm" right no-caret>
            <template #button-content>
              <img class="rounded" src="/img/avatars/avatar1.jpg" alt="Header Avatar" style="width: 18px;">
              <span class="d-none d-sm-inline-block ml-1">{{username}}</span>
              <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block"></i>
            </template>
            <li>
              <div class="p-3 text-center bg-primary">
                <img class="img-avatar img-avatar48 img-avatar-thumb" src="/img/avatars/avatar10.jpg  " alt="Avatar">
              </div>
              <div class="p-2">
<!--                <router-link class="dropdown-item d-flex align-items-center justify-content-between" to="account">-->
<!--                  <span>Account</span>-->
<!--                  <i class="si si-settings ml-1"></i>-->
<!--                </router-link>-->
                <button class="dropdown-item d-flex align-items-center justify-content-between" @click="logout">
                  <span>Log Out</span>
                  <i class="si si-logout ml-1"></i>
                </button>
              </div>
            </li>
          </b-dropdown>
          <!-- END User Dropdown -->
        </div>
        <!-- END Right Section -->
      </div>
      <!-- END Header Content -->

      <!-- Header Loader -->
      <div id="page-header-loader" class="overlay-header bg-white" :class="{ 'show': $store.state.settings.headerLoader }">
        <div class="content-header">
          <div class="w-100 text-center">
            <i class="fa fa-fw fa-circle-notch fa-spin"></i>
          </div>
        </div>
      </div>
      <!-- END Header Loader -->
    </slot>
  </header>
  <!-- END Header -->
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    classes: String
  },

  computed: {
    username(){
      const user = JSON.parse(localStorage.getItem('user'));
      return user.username;
    }
  },
  methods: {
    eventHeaderSearch (event) {
      // When ESCAPE key is hit close the header search section
      if (event.which === 27) {
        event.preventDefault()
        this.$store.commit('headerSearch', { mode: 'off' })
      }
    },
    logout(){
      localStorage.removeItem('user');
      this.$router.push({name: 'login'})
    }
  },
  mounted () {
    document.addEventListener('keydown', this.eventHeaderSearch)
  },
  destroyed () {
    document.removeEventListener('keydown', this.eventHeaderSearch)
  }
}
</script>
