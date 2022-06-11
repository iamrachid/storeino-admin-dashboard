<template>
  <div>
    <!-- Page Content -->
    <div class="content content-narrow">
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Add product
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                +
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Today
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                150
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Yesterday
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                3,200
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                This month
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                21
              </div>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Stats -->

      <!-- All Orders -->
        <base-block title="All Products" header-bg content-full>
          <template #options>
            <button type="button" class="btn-block-option">
              <i class="si si-settings"></i>
            </button>
          </template>
          <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
            <b-thead>
              <b-tr>
                <b-th class="font-w700">Reference</b-th>
                <b-th class="font-w700">Image</b-th>
                <b-th class="d-none d-sm-table-cell font-w700">Name</b-th>
                <b-th class="font-w700">Date</b-th>
                <b-th class="font-w700">Price</b-th>
                <b-th class="font-w700">Actions</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
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
export default {
  components: {ProductRow},
  data () {
    return {
      paginate: {
        currentPage: null,
        total: null,
        perPage: null,
      },
      products: null
    }
  },
  methods: {
    async getProducts(page){
      this.products = null;
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
