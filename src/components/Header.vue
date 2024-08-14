<template>
  <q-header bordered class="bg-white text-primary  q-pa-md q-py-sm">
        <q-toolbar class="flex justify-between">



          <a :href="getBasePath" style="text-decoration:none" class="router-link-active router-link-exact-active  flex flex-col q-gutter-md items-center" aria-current="page">
            <img :src="getBasePath + '/logo.png'" alt="Logo" style="height: 3vw; max-width: 3vw">
            <div style="text-decoration:none">
              <q-toolbar-title  class="text-uppercase  text-bold text-black"> Quasar Sneakers</q-toolbar-title>
            <p class="text-subtitle-2 text-grey-8">Best Sneakers Shop</p>
            </div>
          </a>

          <ul class="flex items-center ">

            <a @click="toggleDrawer">
              <li class="flex items-center cursor-pointer q-px-md text-grey-7 hover:text-black q-gutter-xs">
                <img :src="getBasePath + '/cart.svg'" alt="Cart"/>
                <b>{{totalPrice}} rub</b>
              </li>
            </a>

            <a :href="getBasePath + '#/favs'" style="text-decoration:none">
              <li class="flex items-center cursor-pointer q-px-md text-grey-7  q-gutter-xs hover:text-black">
                <img :src="getBasePath + '/heart.svg'" alt="Heart">
                <span >Favs</span>
              </li>
            </a>
            <li class="flex items-center cursor-pointer q-px-md text-grey-7  q-gutter-xs hover:text-black">
              <img :src="getBasePath + '/profile.svg'" alt="Profile">
              <span>Profile</span>
            </li>
          </ul>
        </q-toolbar>
      </q-header>
</template>

<script setup>
import { defineEmits } from 'vue';
import { computed } from 'vue';


const emit = defineEmits(['toggle-drawer']);

function toggleDrawer() {
  emit('toggle-drawer');
}
defineProps({
  totalPrice:Number
})

const getBasePath = computed(() => {
  return import.meta.env.MODE === 'production' ? '/quasar_sneakers' : '';
});

</script>
