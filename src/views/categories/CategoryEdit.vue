<template>
<div class="content content-narrow">
  <base-block title="Add new Category" header-bg content-full>
    <b-form  @submit.prevent="edit">
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
          text: item.name + ' (' + item.slug.split() + ')',
          value: item.slug,
          disabled: false
        };
        catOptions.push(catOption)
      })
      return catOptions;
    }

  },
  mounted() {
    console.log(this.$route.params)
    this.category.name = categories[0].name;
    this.category.parent = categories[0].level === 0 ? categories[0].slug : categories[0].slug.split(':').slice(0, -1).join(':');
  },
  methods: {
    edit(){
      console.log(this.category)
    }
  }
}
</script>
