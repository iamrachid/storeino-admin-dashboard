<template>
  <div>
    <!-- Page Content -->
    <div class="content content-narrow">
      <!-- All Orders -->
        <base-block title="All Products" header-bg content-full>
          <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
            <b-thead>
              <b-tr>
                <b-th class="font-w700">Reference</b-th>
                <b-th class="font-w700">Image</b-th>
                <b-th class="d-none d-sm-table-cell font-w700">Name</b-th>
                <b-th class="font-w700">Date</b-th>
                <b-th class="font-w700">Price</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <template v-if="products.length === 0">
                <row-loader :col="5"/>
                <row-loader :col="5"/>
                <row-loader :col="5"/>
              </template>
              <product-row v-for="product in products" :key="product._id" :product="product"/>
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
      <!-- END All Orders -->

    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
import ProductRow from "@/views/products/ProductRow";
import Api, {baseUrl} from "@/api";
import RowLoader from "@/views/orders/RowLoader";
export default {
  components: {RowLoader, ProductRow},
  data () {
    return {
      paginate: {
        currentPage: null,
        total: null,
        perPage: null,
      },
      products: []
    }
  },
  methods: {
    async getProducts(page){
      this.products = [];
      const url = baseUrl + '/products';
      const response = await Api.get(url,{
        params: {
          page: page
        }
      });
      this.products = response.data.result;
      this.paginate = response.data.paginate;
    },
    click(page){
      this.getProducts(page);
    }
  },
  mounted() {
    this.getProducts();
  }
}
</script>
