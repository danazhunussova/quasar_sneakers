<script setup>
  import {inject, computed} from 'vue';
  import CartItem from './CartItem.vue'
  const {mycart, removeFromCart} = inject('mycart')
  const getBasePath = computed(() => {
  return import.meta.env.MODE === 'production' ? '/quasar_sneakers' : '';
  })

</script>

<template>
<div class="flex q-gutter-sm">
  <CartItem v-for="item in mycart" :key="item.id" :title="item.title" :price="item.price" :image-url="getBasePath + '/'+item.imageUrl"
  @onClickRemove="()=>removeFromCart(item)"/>
</div>
</template>

