<template>

    <q-card class="my-card q-pa-md q-gutter-sm flex justify-between flex-column " style=" width: 250px;  height: 320px;">
      <q-img @click="onClickFav"
      :src="isFav ? (getBasePath + '/like-2.svg') :(getBasePath  + '/like-1.svg')"

      class="absolute q-mt-sm q-ml-sm "
      style="height: 30px; max-width: 30px; z-index:1"
      />

      <q-img :src="imageUrl" style=" width: 220px;  height: 160px;"/>

     <div style="flex: 1;">
        <q-item-label class="flex q-my-sm" >{{title}}</q-item-label>

        <div class="flex items-center justify-between q-mt-xs " >
                <div class="q-gutter-xs">
                  <q-item-label  class="text-grey-5">Price:</q-item-label>
                  <q-item-label class="text-bold q-mb-none">{{ price }} rub.</q-item-label>
                </div>
              <q-img @click="onClickAdd" class="add-to-cart-button"
                  :src=" getBasePath + (isAdded ? '/checked.svg' :'/plus.svg')"
                  style="height: 25px; max-width: 25px"
              />
        </div>


      </div>


    </q-card>

</template>


<script setup>

import { computed } from 'vue';
defineProps({
  isFav: Boolean,
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFav: Function
})

const getBasePath = computed(() => {
  return import.meta.env.MODE === 'production' ? '/quasar_sneakers' : '';
});
</script>
