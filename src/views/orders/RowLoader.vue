<template>
  <b-tr ref="row">
    <b-td :colspan="col">
      <ContentLoader viewBox="0 0 10 20" height="15" :width="width">
      <rect x="0" y="0" rx="3" ry="3" :width="width" height="10" />
    </ContentLoader>
    </b-td>
  </b-tr>
</template>
<script>
import {ContentLoader} from "vue-content-loader";
export default {
  name: 'RowLoader',
  data(){
    return {
      width: '0',
    }
  },
  props: ['col'],
  components: {ContentLoader},
  mounted() {
    this.width = this.$refs.row.$el.clientWidth
  }
}

</script>
