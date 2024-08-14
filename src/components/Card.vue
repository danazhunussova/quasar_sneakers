<template>

    <q-card class="my-card q-pa-md q-gutter-sm flex justify-between" style=" width: 250px;  height: 350px;">
      <q-img @click="onClickFav"
      :src="isFav ? (getBasePath + '/like-2.svg') :(getBasePath  + '/like-1.svg')"

      class="absolute q-mt-sm q-ml-sm "
      style="height: 30px; max-width: 30px; z-index:1"
      />

      <q-img :src="imageUrl" />

      <div style="width:100%">
        <p class="q-mt-sm">{{title}}</p>

        <div class="flex items-center justify-between q-mt-xs" >
                <div class="q-gutter-xs">
                  <span class="text-grey-5">Price:  </span>
                  <b> {{price}} rub.</b>
                </div>
              <q-img @click="onClickAdd"
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
