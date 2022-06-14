<template>
  <b-tr :class="row">
    <b-td class="d-none d-sm-table-cell">
      {{ category._id }}
    </b-td>
<!--    <b-td>-->
<!--      <img class="img-avatar img-avatar64 img-thumb" :src="category.img" alt="Avatar">-->
<!--    </b-td>-->
    <b-td class="d-sm-table-cell">
      {{ category.name }}
    </b-td>
    <b-td class="text-primary">
      {{ category.slug.replaceAll(':', ' > ',) }}
    </b-td>
    <b-td class="text-right">
      {{ category.level }}
    </b-td>
    <b-td class="text-right">
      {{ category.children.length }}
    </b-td>
    <b-td class="text-center">
      <a :href="'categories/' + category.slug" class="mx-1">
        <i class="fa fa-fw fa-pencil-alt"></i>
      </a>
      <a href="javascript:void(0)" @click="deleteCat"  class="mx-1">
        <i class="fa fa-fw fa-trash text-danger"></i>
      </a>
    </b-td>
  </b-tr>
</template>
<script>
import {VBTooltip} from "bootstrap-vue";

export default {
  name: 'CategoryRow',
  data(){
    return {
    row :'',
    }
  },
  directives: {
    'b-tooltip' :VBTooltip
  },
  props: {
    category: {}
  },
  methods:{
    deleteCat(){
      this.$emit('deleteCat', this.category.slug);
      this.row = 'bg-danger-light'
    }
  }
}

</script>
