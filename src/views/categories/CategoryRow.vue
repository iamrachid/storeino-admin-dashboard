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
      <a class="font-w600" href="javascript:void(0)">{{ category.slug }}</a>
    </b-td>
    <b-td class="text-right">
      {{ category.level }}
    </b-td>
    <b-td class="text-right">
      {{ category.children.length }}
    </b-td>
    <b-td class="text-center">
      <a :href="'categories/' + category._id" v-b-tooltip.hover.nofade.left="'Manage'">
        <i class="fa fa-fw fa-pencil-alt mx-1"></i>
      </a>
      <a href="javascript:void(0)" v-b-tooltip.hover.nofade.left="'Delete'" v-b-tooltip:>
        <i class="fa fa-fw fa-trash text-danger mx-1" ></i>
      </a>
    </b-td>
  </b-tr>
</template>
<script>
import {VBTooltip} from "bootstrap-vue";

export default {
  name: 'CategoryRow',
  directives: {
    'v-b-tooltip' :VBTooltip
  },
  props: {
    category: {}
  }
}

</script>
