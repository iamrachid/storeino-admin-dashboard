<template>
  <div>
    <!-- Page Content -->
    <div class="content content-narrow">

      <!-- All Orders -->
        <base-block title="All Orders" header-bg content-full>
          <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
            <b-thead>
              <b-tr>
                <b-th class="font-w700">ID</b-th>
                <b-th class="d-none d-sm-table-cell font-w700">Date</b-th>
                <b-th class="font-w700">Details</b-th>
                <b-th class="font-w700">Client</b-th>
                <b-th class="font-w700">State</b-th>
                <b-th class="d-none d-sm-table-cell font-w700 text-right" style="width: 120px;">Total</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
<!--              <transition :class="{fadeIn: !!orders, fadeOut: !orders}">-->
                <template v-if="orders.length === 0" >
                  <row-loader :col="6"/>
                  <row-loader :col="6"/>
                  <row-loader :col="6"/>
                </template>
<!--              </transition>-->
              <order-row  v-for="order in orders" :key="order._id" :order="order" class="fadeIn"/>
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

import OrderRow from "@/views/orders/OrderRow";
import Api, {baseUrl, customHeader} from "@/api";
import RowLoader from "@/views/orders/RowLoader";

export default {
  components: {RowLoader, OrderRow},
  data () {
    return {
      paginate: {},
      orders: []
    }
  },
  methods: {
    async getOrders(page) {
      this.orders = [];
      const url = baseUrl + '/orders';
      const response = await Api.get(url,{
        params: {
          page: page
        }
      });
      this.orders = response.data.result;
      this.paginate = response.data.paginate;
    },
    click(page){
      this.getOrders(page)
    }
  },
  mounted() {
    this.getOrders(1);
  }
}
</script>
