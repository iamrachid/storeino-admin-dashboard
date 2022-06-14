<template>
  <b-tr>
    <b-td>
      <a class="font-w600" href="javascript:void(0)">#{{ order.orderId }}</a>
    </b-td>
    <b-td class="d-none d-sm-table-cell">
      {{ date }}
    </b-td>
    <b-td>
      <a class="font-w600" href="javascript:void(0)" v-for="(detail, index) in order.details" :key="detail.product._id+index">
        <img class="img-avatar img-avatar32" v-if="index < 3" :src="detail.product.image.src" alt="Avatar">
      </a>
      <div class="img-avatar img-avatar32" v-if=" order.details.length > 3">+{{ order.details.length - 3}}</div>
    </b-td>
    <b-td>
      {{order.customer.firstname}} {{order.customer.lastname}}
    </b-td>
    <b-td>
      <span class="font-w600" :class="`text-${stateVariant}`">{{ order.status.toLowerCase() }}</span>
    </b-td>
    <b-td class="d-none d-sm-table-cell text-right">
      {{ order.total }} {{ order.currency}}
    </b-td>
  </b-tr>
</template>
<script>
export default {
  name: 'OrderRow',
  props: {
    order: {}
  },
  computed:{
    date(){
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(this.order.createdAt).toLocaleDateString('en-US',options)
      return date
    },
    stateVariant(){
      switch (this.order.status){
        case 'PENDING': return 'warning';
        case 'SUCCESS': return 'success';
        case 'CANCELLED': return 'danger';
        default : return 'info';
      }
    }
  }
}

</script>
