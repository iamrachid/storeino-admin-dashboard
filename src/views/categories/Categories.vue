<template>
<div class="content content-narrow">
  <base-block title="Categories Products" header-bg content-full>
    <template #options>
      <a href="categories/add" class="btn btn-primary">
        Add new Category
        <i class="si si-plus"></i>
      </a>
    </template>
    <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
      <b-thead>
        <b-tr>
          <b-th class="font-w700 d-none d-sm-table-cell">ID</b-th>
<!--          <b-th class="d-none d-sm-table-cell font-w700">Image</b-th>-->
          <b-th class="font-w700">Name</b-th>
          <b-th class="font-w700">Slug</b-th>
          <b-th class="font-w700">Level</b-th>
          <b-th class="font-w700">Subcategories</b-th>
          <b-th class="font-w700">Actions</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <template v-if="categories.length === 0" >
          <row-loader :col="6" />
          <row-loader :col="6" />
          <row-loader :col="6" />
        </template>
        <category-row v-for="item in categories" :key="item._id" :category="item" v-on:deleteCat="deleteCat"/>
      </b-tbody>
      <b-tfoot>
        <tr>
          <td colspan="7">
            <b-pagination v-model="paginate.currentPage" :total-rows="paginate.total" :per-page="paginate.perPage" align="right" prev-text="Prev" next-text="Next" @change="click"></b-pagination>
          </td>
        </tr>
      </b-tfoot>
    </b-table-simple>
  </base-block>
</div>

</template>

<script>

import CategoryRow from "@/views/categories/CategoryRow";
import Api, {baseUrl} from "@/api";
import RowLoader from "@/views/orders/RowLoader";
import {categories} from "@/data/categories";

export default {
  name: "Categories",
  components: {RowLoader, CategoryRow},
  data(){
    return {
      paginate: {
        currentPage: 1,
        total: 12,
        perPage: 10
      },
      categories: [],
    }
  },
  methods: {
    async getCategories(page){
      this.categories = [];
      const url = baseUrl + '/category';
      const response = await Api.get(url,{
        params: {
          page: page,
          limit: 10
        }
      });
      this.categories = response.data.result;
      this.paginate = response.data.paginate;
    },
    click(page){
      this.getCategories(page)
    },

    deleteCat(slug){
      const url = baseUrl + '/category/' + slug;
      Api.delete(url).then(() => {
        this.categories = this.categories.filter(item => item.slug !== slug);
        if (!this.categories.length)
          this.getCategories();
      });
    }
  },
  async mounted() {
    this.getCategories()
  }
}
</script>
