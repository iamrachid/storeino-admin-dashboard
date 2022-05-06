<template>
  <b-form>
      <multiselect :options="categories"
                   placeholder="Search category"
                   v-model="selectedCategories"
                   label="name" track-by="_id"
                   :multiple="true"
                   :taggable="true"/>
  </b-form>
</template>
<script>
import Multiselect from 'vue-multiselect';
export default {
  name: 'CategoriesForm',
  components: {
    Multiselect
  },
  data(){
    return {
      selectedCategories: [this.categories[0]],
    }
  },
  props: {
    categories: []
  },
  methods: {

  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css" />

<style>
.multiselect__tag {
  background-color: #dfe6f6;
  color: #2c4e9b;
}
</style>
