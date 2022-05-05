<template>
<div class="content content-narrow">
  <base-block title="Add new Category" header-bg content-full>
    <b-form  @submit.prevent="add">
          <b-form-group label="Category Name" label-for="category">
            <b-form-input id="category" v-model.trim="category.name" placeholder="" required></b-form-input>
          </b-form-group>
            <b-form-group label="Parent" label-for="parent">
              <b-form-select id="parent" v-model="category.parent" :options="options" required plain></b-form-select>
          </b-form-group>
            <button class="btn btn-alt-primary">Add</button>
    </b-form>
  </base-block>
</div>
</template>

<script>
import {categories} from "@/data/categories";
export default {
  name: "CategoryAdd",
  data(){
    return {
      category: {
        parent: null,
        name: null
      },
    }
  },
  computed: {
    options(){
      let catOptions = [{value: null, text: 'Select An Option', disabled: true}];
      categories.forEach(item => {
        const catOption = {
          text: item.name + ' (' + item.slug + ')',
          value: item.slug,
          disabled: false
        };
        catOptions.push(catOption)
      });
      return catOptions;
    }
  },
  methods: {
    add(){
      console.log(this.category)
    }
  }
}
</script>
