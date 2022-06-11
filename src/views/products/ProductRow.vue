<template>
  <b-tr>
    <b-td>
      <a class="font-w600" href="javascript:void(0)">{{ product.reference }}</a>
    </b-td>
    <b-td>
      <img class="img-avatar img-avatar64 img-thumb" :src="product.images[0].src" alt="Avatar">
    </b-td>
    <b-td class="d-sm-table-cell">
      {{product.name.substr(0,50)}}{{product.name.length > 50 ? '...' : ''}}
    </b-td>
    <b-td class="d-none d-sm-table-cell">
      {{ product.createdAt }}
    </b-td>
    <b-td class="text-right">
      {{ price }} MAD
    </b-td>
    <b-td class="text-center">
      <a href="javascript:void(0)">
        <i class="fa fa-fw fa-eye mx-1" ></i>
      </a>
      <a href="javascript:void(0)">
        <i class="fa fa-fw fa-pencil-alt mx-1"></i>
      </a>
    </b-td>
  </b-tr>
</template>
<script>
export default {
  name: 'ProductRow',
  props: {
    product: {}
  },
  computed: {
    price() {
      if (this.product.type === 'simple')
        return this.product.price.salePrice;
      else {
        const min = this.product.variants.reduce((acc, cur) => (acc < cur.price.salePrice) ? acc : cur.price.salePrice);
        const max = this.product.variants.reduce((acc, cur) => (acc > cur.price.salePrice) ? acc : cur.price.salePrice);
        return (min === max) ? min : min + '-' + max;
      }
    },
    stateVariant(){
      switch (this.product.state){
        case 'PENDING': return 'warning';
        case 'SUCCESS': return 'success';
        case 'CANCELLED': return 'danger';
        case 'CONFIRMED': return 'info';
        default : return '';
      }
    }
  }
}

</script>
