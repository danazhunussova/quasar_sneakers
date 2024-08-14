<script setup>
  const emit = defineEmits(['onClickRemove'])
  defineProps({
    id:Number,
    title: String,
    imageUrl: String,
    price: Number

  })
</script>
<template>
  <div class="flex items-center q-py-md" style="border: 1px solid #ccc; border-radius: 8px; " >
    <img :src="imageUrl" alt="" class="q-px-xs" style="width:25%;">
    <div class="flex col q-px-sm ">
      <p>{{title}}</p>
      <span class="flex items-center justify-between " style="width:100%">
        <b>{{price}} rub.</b>
        <img class="q-mx-sm" @click="emit('onClickRemove')" src="/close.svg">
      </span>

    </div>
  </div>
</template>
