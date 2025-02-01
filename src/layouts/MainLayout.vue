<template>
  <div>
    <div class="bg-brown-1">
      <q-layout view="lHh lpr lFf" container style="height: 100vh">
        <q-page-container>
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>


<script setup>
import Header from "../components/Header.vue";
import Drawer from "../components/Drawer.vue";
import Cardlist from "../components/Cardlist.vue";

import { onMounted, watch, reactive, provide, computed, ref } from "vue";
import axios from "axios";

// Ref for controlling the right drawer state
const rightDrawerOpen = ref(false);

// Function to toggle the right drawer
function toggleRightDrawer() {
  console.log("Toggling Drawer");
  rightDrawerOpen.value = !rightDrawerOpen.value;
  console.log(rightDrawerOpen.value);
}

const mycart = ref([]);
const totalPrice = computed(() =>
  mycart.value.reduce((acc, item) => acc + item.price, 0)
);

const addToCart = (item) => {
  mycart.value.push(item);
  item.isAdded = true;
};
const removeFromCart = (item) => {
  mycart.value.splice(mycart.value.indexOf(item), 1);
  item.isAdded = false;
};

/*const createOrder = async() =>{
    try{
      isCreatingOrder.value = true
      const {data} = await axios.post('https://6e5e12b4bb07b2b5.mokky.dev/orders',{
        items: mycart.value,
        totalPrice: totalPrice.value
      })
      mycart.value = []
      return data;

    } catch(err){console.log(err)}
    finally{
      isCreatingOrder.value=false
    }
  }
*/

watch(
  mycart,
  () => {
    localStorage.setItem("mycart", JSON.stringify(mycart.value));
  },
  { deep: true }
);
provide("mycart", { mycart, addToCart, removeFromCart });
</script>

