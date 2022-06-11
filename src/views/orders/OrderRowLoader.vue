<template>
  <b-tr ref="row">
    <b-td colspan="7">
      <ContentLoader viewBox="0 0 10 20" height="15" :width="width">
      <rect x="0" y="0" rx="3" ry="3" :width="width" height="10" />
    </ContentLoader>
    </b-td>
  </b-tr>
</template>
<script>
import {ContentLoader} from "vue-content-loader";
export default {
  name: 'OrderRowLoader',
  data(){
    return {
      width: '0',
    }
  },
  components: {ContentLoader},
  mounted() {
    this.width = this.$refs.row.$el.clientWidth
  }
}

</script>
