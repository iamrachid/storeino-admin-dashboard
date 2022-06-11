<template>
  <div>
    <!-- Hero -->
    <base-background image="img/photos/photo3@2x.jpg" inner-class="bg-primary-dark-op">
      <div class="content content-narrow content-full">
        <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center mt-5 mb-2 text-center text-sm-left">
          <div class="flex-sm-fill">
            <h1 class="font-w600 text-white mb-0">Dashboard</h1>
            <h2 class="h4 font-w400 text-white-75 mb-0">Welcome
              Administrator</h2>
          </div>
          <div class="mt-3 mt-sm-0 ml-sm-3">
            <b-button variant="primary" class="px-4 py-2" href="javascript:void(0)" v-click-ripple>
              <i class="fa fa-plus mr-1"></i> New Project
            </b-button>
          </div>
        </div>
      </div>
    </base-background>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content content-narrow">
      <!-- Stats -->
      <b-row>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Visitors
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                120,580
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Sales
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                150
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Earnings
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                $3,200
              </div>
          </base-block>
        </b-col>
        <b-col cols="6" md="3" lg="6" xl="3">
          <base-block tag="a" rounded link-pop content-full class="border-left border-primary border-4x" href="javascript:void(0)">
              <div class="font-size-sm font-w600 text-uppercase text-muted">
                Avg Sale
              </div>
              <div class="font-size-h2 font-w400 text-dark">
                $21
              </div>
          </base-block>
        </b-col>
      </b-row>
      <!-- END Stats -->

      <!-- Customers and Latest Orders -->
      <b-row class="row-deck">
        <!-- Latest Customers -->
        <b-col xl="6">
          <base-block title="Latest Customers" header-bg content-full>
            <template #options>
              <button type="button" class="btn-block-option">
                <i class="si si-settings"></i>
              </button>
            </template>
            <b-table-simple striped hover borderless class="table-vcenter font-size-sm mb-0">
              <b-thead>
                <b-tr>
                  <b-th class="font-w700" style="width: 80px;">ID</b-th>
                  <b-th class="d-none d-lg-table-cell font-w700 text-center" style="width: 100px;">Photo</b-th>
                  <b-th class="font-w700">Name</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700 text-center" style="width: 80px;">Orders</b-th>
                  <b-th class="font-w700 text-center" style="width: 60px;"></b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="customer in latestCustomers" :key="customer.id">
                  <b-td class="font-w600">
                    {{ customer.id }}
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">
                    <img class="img-avatar img-avatar32" :src="`img/avatars/${customer.avatar}.jpg`" alt="Avatar">
                  </b-td>
                  <b-td>
                    <a class="link-fx font-w600" href="javascript:void(0)">{{ customer.name }}</a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-center">
                    <a class="link-fx font-w600" href="javascript:void(0)">{{ customer.orders }}</a>
                  </b-td>
                  <b-td class="text-center">
                    <a href="javascript:void(0)">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </a>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
        </b-col>
        <!-- END Latest Customers -->

        <!-- Latest Orders -->
        <b-col xl="6">
          <base-block title="Latest Orders" header-bg content-full>
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
                  <b-th class="font-w700">State</b-th>
                  <b-th class="d-none d-sm-table-cell font-w700 text-right" style="width: 120px;">Total</b-th>
                  <b-th class="font-w700 text-center" style="width: 60px;"></b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="order in latestOrders" :key="order.id">
                  <b-td>
                    <a class="font-w600" href="javascript:void(0)">#{{ order.id }}</a>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell">
                    {{ order.date }}
                  </b-td>
                  <b-td>
                    <span class="font-w600" :class="`text-${order.stateVariant}`">{{ order.state }}</span>
                  </b-td>
                  <b-td class="d-none d-sm-table-cell text-right">
                    {{ order.total }}
                  </b-td>
                  <b-td class="text-center">
                    <a href="javascript:void(0)">
                      <i class="fa fa-fw fa-pencil-alt"></i>
                    </a>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
        </b-col>
        <!-- END Latest Orders -->
      </b-row>
      <!-- END Customers and Latest Orders -->
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>


export default {
  data () {
    return {
      latestCustomers: [
        {
          id: 1521,
          avatar: 'avatar11',
          name: 'Adam McCoy',
          orders: 5
        },
        {
          id: 1520,
          avatar: 'avatar1',
          name: 'Betty Kelley',
          orders: 7
        },
        {
          id: 1519,
          avatar: 'avatar5',
          name: 'Jesse Fisher',
          orders: 12
        },
        {
          id: 1518,
          avatar: 'avatar12',
          name: 'Ryan Flores',
          orders: 19
        },
        {
          id: 1517,
          avatar: 'avatar3',
          name: 'Alice Moore',
          orders: 2
        },
        {
          id: 1516,
          avatar: 'avatar13',
          name: 'Scott Young',
          orders: 5
        },
        {
          id: 1515,
          avatar: 'avatar14',
          name: 'Ralph Murray',
          orders: 9
        }
      ],
      latestOrders: [
        {
          id: 7835,
          date: 'today',
          state: 'Pending..',
          stateVariant: 'warning',
          total: '$999,99'
        },
        {
          id: 7834,
          date: 'today',
          state: 'Pending..',
          stateVariant: 'warning',
          total: '$2.299,00'
        },
        {
          id: 7833,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$1200,00'
        },
        {
          id: 7832,
          date: 'today',
          state: 'Cancelled',
          stateVariant: 'danger',
          total: '$399,00'
        },
        {
          id: 7831,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$349,00'
        },
        {
          id: 7830,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$999,00'
        },
        {
          id: 7829,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$39,99'
        },
        {
          id: 7828,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$499,00'
        },
        {
          id: 7827,
          date: 'today',
          state: 'Success',
          stateVariant: 'success',
          total: '$325,00'
        }
      ]
    }
  }
}
</script>
