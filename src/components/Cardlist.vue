<script setup>
      import Card from './Card.vue';
      defineProps({
            items: Array
      })
      const emit = defineEmits(['addToFav', 'addToCart']);
</script>

<template>
        <div class=" q-gutter-md flex q-pb-xl items-center" >
            <!--<Card
            image-url="/sneakers/sneakers-1.jpg"
            title="Sneakers for Men Nike Blazer Mid Suede"
            :price="5000"
            :onClickAdd="onClickAdd"
            :onClickFav="onClickFav"/>
        -->
            <Card
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :image-url="'./'+item.imageUrl"
            :title="item.title"
            :price="item.price"
            :onClickAdd="() => emit('addToCart', item)"
            :onClickFav="()  => emit('addToFav', item)"
            :isFav = "item.isFav"
            :is-added="item.isAdded"
            />


      </div>
</template>

