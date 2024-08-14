<script setup>
  import {inject} from 'vue';
  import CartItem from './CartItem.vue'
  const {mycart, removeFromCart} = inject('mycart')
</script>

<template>
<div class="flex q-gutter-sm">
  <CartItem v-for="item in mycart" :key="item.id" :title="item.title" :price="item.price" :image-url="'/'+item.imageUrl"
  @onClickRemove="()=>removeFromCart(item)"/>
</div>
</template>
