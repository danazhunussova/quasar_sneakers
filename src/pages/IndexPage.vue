<template>
  <q-page class="q-mx-xl">
    <!-- heading -->
    <div class="flex justify-between items-center">
      <h4 class="text-bold">All Sneakers</h4>
      <div class="flex q-gutter-md ">
          <!--"{{ model }}"
          <q-select style="min-width:140px" v-model="model" :options="options" emit-label map-options />
-->

          <!--<select @change="onChangeSelect" class="q-py-4 q-px-6 " style="min-width:200px; border:0.5px solid grey; border-radius: 5px">
            <option value="name">По названию</option>
            <option value="price">по цене (дешевые)</option>
            <option value="-price">по цене (дорогие)</option>
          </select>-->

          <q-select
            v-model="filters.sortBy"
            :options="sortOptions"
            emit-value
            map-options
            dense
            outlined
            style="min-width:200px;"
          />

          <!--<div >
            <img class="absolute q-mt-sm q-ml-xs" :src="getBasePath + '/search.svg'" alt="Search">
            <input @change="onSearch" class="border border-red q-py-xs q-pl-lg" placeholder="Поиск" type="text" style="border:0.5px solid grey; border-radius: 5px">
          </div>-->

          <q-input
            v-model="filters.searchQuery"
            @input="onSearch"
            placeholder="Поиск"
            dense
            outlined
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>

      </div>
    </div>
    <!-- cardlist -->
    <Cardlist :items="items" @add-to-fav="addToFav" @add-to-cart="onClickAddPlus"/>
  </q-page>
</template>


<script setup>
import { ref, onMounted,watch,reactive, provide, computed, inject } from 'vue'
import Card from "../components/Card.vue"
import Cardlist from "../components/Cardlist.vue"
import axios from 'axios'
const {mycart, addToCart, removeFromCart} = inject('mycart');

const items = ref([])
/*
const model = ref(options[0])
*/
const sortOptions = computed(() => [
  { label: 'По названию', value: 'name' },
  { label: 'по цене (дешевые)', value: 'price' },
  { label: 'по цене (дорогие)', value: '-price' }
]);
const filters = reactive({
    sortBy: 'name',
    searchQuery: ''
  })

const onSearch = event => {
  filters.searchQuery = event.target.value
  console.log(filters.searchQuery)
}

  const onClickAddPlus = async(item) =>{
    try{
      if(!item.isAdded){
        addToCart(item)
      } else{
        removeFromCart(item)
      }
    } catch(err){console.log(err)}
  }

  const addToFav = async(item) =>{
    try{
      if(!item.isFav){
        const obj = {
          itemId: item.id,
          item
        };
        const {data:favs} = await axios.post('https://6e5e12b4bb07b2b5.mokky.dev/favs',obj);
        item.isFav = true;
        item.favId= data.id
        console.log(data)
      }else{
        await axios.delete('https://6e5e12b4bb07b2b5.mokky.dev/favs/'+item.favId);
        item.isFav = false;
        item.favId = null;
      }
    }catch(err){console.log(err)}
  }

  const fetchFavs = async() => {
    try{
      const {data:favs} = await axios.get('https://6e5e12b4bb07b2b5.mokky.dev/favs');
      items.value = items.value.map(item =>{
        const fav = favs.find(fav => fav.itemId === item.id);
        if(!fav){return item;}
        return{
          ...item,
          isFav:true,
          favId:fav.id

        }
      });


    }catch(err){console.log(err)}
  }

  const fetchItems = async() =>{
    try{
      const params = {
        sortBy: filters.sortBy,
        searchQuery: filters.searchQuery
      }
      const {data} = await axios.get('https://6e5e12b4bb07b2b5.mokky.dev/items?sortBy='+filters.sortBy + '&title=*'+ filters.searchQuery +'*');
      items.value = data.map(obj=>({
        ...obj,
        isFav:false,
        isAdded:false,
        favId:null,
        cartIteId:null
      }))


    }catch(err){console.log(err)}
  }

const getBasePath = computed(() => {
  return import.meta.env.MODE === 'production' ? '/quasar_sneakers' : '';
});

  onMounted(async()=>{
    const localcart = localStorage.getItem('mycart')
    mycart.value= localcart ? JSON.parse(localcart) : [];
    await fetchItems();
    await fetchFavs();
    items.value = items.value.map((item) =>({
      ...item,
      isAdded:mycart.value.some((cartIte) =>cartIte.id === item.id)
    }))
  })

  watch(mycart, () =>{
    items.value= items.value.map((item)=>({
      ...item,
      isAdded:false
    }))
  })


  watch(filters, fetchItems);

</script>

