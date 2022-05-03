<template>
<div class="content content-narrow">
  <base-block title="Categories Products" header-bg content-full>
    <template #options>
      <button type="button" class="btn-block-option">
        <i class="si si-settings"></i>
      </button>
    </template>
    <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
      <b-thead>
        <b-tr>
          <b-th class="font-w700 d-none d-sm-table-cell">ID</b-th>
          <b-th class="d-none d-sm-table-cell font-w700">Image</b-th>
          <b-th class="font-w700">Name</b-th>
          <b-th class="font-w700">Slug</b-th>
          <b-th class="font-w700">Level</b-th>
          <b-th class="font-w700">Subcategories</b-th>
          <b-th class="font-w700">Actions</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <category-row v-for="item in categories" :key="item._id" :category="item"/>
      </b-tbody>
      <b-tfoot>
        <tr>
          <td colspan="7">
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" align="right" prev-text="Prev" next-text="Next" @change="click"></b-pagination>
          </td>
        </tr>
      </b-tfoot>
    </b-table-simple>
  </base-block>
</div>

</template>

<script>

import {categories, paginate} from "@/data/categories";
import CategoryRow from "@/views/categories/CategoryRow";

export default {
  name: "Categories",
  components: {CategoryRow},
  data(){
    return {
      currentPage:paginate.current_page,
      rows: paginate.total,
      perPage: paginate.per_page,
      categories: categories
    }
  },
  methods: {
    click(page){
      console.log(this.categories[0]._id)
    }
  }
}
</script>

<style scoped>

</style>
