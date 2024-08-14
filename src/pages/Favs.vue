<template>
  <q-page class="q-mx-xl">
    <div class="flex justify-between items-center">
      <h4 class="text-bold">Favorite Sneakers</h4>

    </div>
    <div>
      <Cardlist :items="favs" @add-to-fav="addToFav" @add-to-cart="addToCart"/>
    </div>

  </q-page>
</template>

<script setup>

import { ref, onMounted,watch,reactive, provide, computed, inject } from 'vue'
import Cardlist from "../components/Cardlist.vue"
import axios from 'axios'
const favs = ref([])


onMounted(async()=>{

  try{
    const {data} = await axios.get('https://6e5e12b4bb07b2b5.mokky.dev/favs?_relations=items');
    favs.value= data.map((obj) => obj.item)
  }catch(err){console.log(err)}

})

</script>
