<script setup>

  import { computed } from 'vue';
  const emit = defineEmits(['onClickRemove'])
  defineProps({
    id:Number,
    title: String,
    imageUrl: String,
    price: Number

  })

  const getBasePath = computed(() => {
  return import.meta.env.MODE === 'production' ? '/quasar_sneakers' : '';
});
</script>
<template>
  <q-card class="flex items-center q-py-md " >
    <q-img :src="imageUrl" alt="" class="q-px-xs" style="width:30%;"/>
    <div class="flex col q-px-sm ">
      <p>{{title}}</p>
      <span class="flex items-center justify-between " style="width:100%">
        <b>{{price}} rub.</b>
        <img class="q-mx-sm" @click="emit('onClickRemove')" :src="getBasePath + '/close.svg'" style="width:23px">
      </span>

    </div>
  </q-card>
</template>
