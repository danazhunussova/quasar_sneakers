<template>
  <q-header bordered class="bg-white text-primary  q-pa-md q-py-sm">
        <q-toolbar class="flex justify-between">

          <a :href="getBasePath" style="text-decoration:none" class="router-link-active router-link-exact-active flex q-gutter-md items-center flex-row" aria-current="page">
            <img :src="getBasePath + '/logo.png'" alt="Logo" style="height: 3vw; max-width: 3vw">
            <div style="text-decoration:none">
              <q-toolbar-title  class="text-uppercase  text-bold text-black"> Quasar Sneakers</q-toolbar-title>
            <p class="text-subtitle-2 text-grey-8">Best Sneakers Shop</p>
            </div>
          </a>

          <q-list class="flex items-center ">

            <a @click="toggleDrawer">
              <q-item class="flex items-center cursor-pointer q-px-md text-grey-7 hover:text-black q-gutter-xs">
                <img :src="getBasePath + '/cart.svg'" alt="Cart"/>
                <b>{{totalPrice}} rub</b>
              </q-item>
            </a>

            <a :href="getBasePath + '#/favs'" style="text-decoration:none">
              <q-item class="flex items-center cursor-pointer q-px-md text-grey-7  q-gutter-xs hover:text-black">
                <img :src="getBasePath + '/heart.svg'" alt="Heart">
                <span >Favs</span>
              </q-item>
            </a>
            <a @click="showDialog = true" >
              <q-item class="flex items-center cursor-pointer q-px-md text-grey-7  q-gutter-xs hover:text-black">
              <img :src="getBasePath + '/profile.svg'" alt="Profile">
              <span>Profile</span>
            </q-item>
            </a>
            <q-dialog  v-model="showDialog" persistent>
              <q-card class="  q-pa-md">
                <q-card-section class="justify-center">
                  <div class="text-h6">Hi, you do not have an account</div>
                </q-card-section>
                <q-card-actions  class="justify-center">
                  <q-btn  label="Okay" @click="showDialog = false" />
                </q-card-actions>
              </q-card>
            </q-dialog>

          </q-list>
        </q-toolbar>
      </q-header>
</template>

<script setup>
import { defineEmits, ref } from 'vue';
import { computed } from 'vue';


const emit = defineEmits(['toggle-drawer']);
const showDialog = ref(false);

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
