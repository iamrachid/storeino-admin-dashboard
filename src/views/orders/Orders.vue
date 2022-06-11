<template>
  <div>
    <!-- Page Content -->
    <div class="content content-narrow">
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Pending
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                120,580
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
        <base-block title="All Orders" header-bg content-full>
          <template #options>
            <button type="button" class="btn-block-option">
              <i class="si si-settings"></i>
            </button>
          </template>
          <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
            <b-thead>
              <b-tr>
                <b-th class="font-w700">ID</b-th>
                <b-th class="d-none d-sm-table-cell font-w700">Date</b-th>
                <b-th class="font-w700">Details</b-th>
                <b-th class="font-w700">Client</b-th>
                <b-th class="font-w700">State</b-th>
                <b-th class="d-none d-sm-table-cell font-w700 text-right" style="width: 120px;">Total</b-th>
                <b-th class="font-w700 text-center" style="width: 60px;"></b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
<!--              <transition :class="{fadeIn: !!orders, fadeOut: !orders}">-->
                <template v-if="orders.length === 0" >
                  <order-row-loader/>
                  <order-row-loader/>
                  <order-row-loader/>
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
import axios from "axios";
import OrderRowLoader from "@/views/orders/OrderRowLoader";

export default {
  components: {OrderRowLoader, OrderRow},
  data () {
    return {
      paginate: {},
      orders: []
    }
  },
  methods: {
    async getOrders(page) {
      this.orders = null;
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
