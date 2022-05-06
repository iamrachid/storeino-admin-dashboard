<template>
  <b-tr>
    <b-td class="d-none d-sm-table-cell">
      {{ category._id }}
    </b-td>
    <b-td>
<!--      <img class="img-avatar img-avatar64 img-thumb" :src="category.image" alt="Avatar">-->
    </b-td>
    <b-td class="d-sm-table-cell">
      {{ category.name }}
    </b-td>
    <b-td>
      <a class="font-w600" href="javascript:void(0)">{{ category.slug.replaceAll(':', ' > ',) }}</a>
    </b-td>
    <b-td class="text-right">
      {{ category.level }}
    </b-td>
    <b-td class="text-right">
      {{ category.children.length }}
    </b-td>
    <b-td class="text-center">
      <a :href="'categories/' + category._id" class="mx-1">
        <i class="fa fa-fw fa-pencil-alt" v-b-tooltip.hover.top="'Manage'" ></i>
      </a>
      <b-a href="javascript:void(0)" v-b-tooltip.hover.top ="'Delete'" @click="deleteCat"  class="mx-1">
        <i class="fa fa-fw fa-trash text-danger"    v-b-tooltip.hover.top ="'Delete'" ></i>
      </b-a>
    </b-td>
  </b-tr>
</template>
<script>
import {VBTooltip} from "bootstrap-vue";

export default {
  name: 'CategoryRow',
  directives: {
    'b-tooltip' :VBTooltip
  },
  props: {
    category: {}
  },
  methods:{
    deleteCat(){
      this.$emit('deleteCat', this.category.slug);
    }
  }
}

</script>
