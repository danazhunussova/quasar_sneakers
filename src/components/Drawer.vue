<!--<script>
import DrawerHead from './DrawerHead.vue'
//import CartItem from './CartItem.vue'
//import CartItemList from './CartItemList.vue'
//import InfosBlock from './InfosBlock.vue'
import axios from 'axios'
/*
export default {
  components: {
    DrawerHead,
    CartItem,
    CartItemList,
    InfosBlock
  },

  props: {
    totalPrice: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      isCreatingOrder: false,
      orderId: null
    } //const isCreatingOrder = ref(false)
    //const orderId = ref(null)
  },

  computed: {
    cartIsEmpty() {
      return this.mycart.length === 0
    }, // dont use value, use this.
    buttonDisabled() {
      return this.isCreatingOrder || this.cartIsEmpty
    }
  },

  inject: ['mycart', 'closeDrawer'], //no need to import ref, watch, inject, computed in option api

  methods: {
    //in my understanding just functions
    async createOrder() {
      try {
        this.isCreatingOrder = true

        const { data } = await axios.post('https://6e5e12b4bb07b2b5.mokky.dev/orders', {
          items: this.mycart,
          totalPrice: this.totalPrice
        })

        this.mycart = []
        this.orderId = data.id //gets data from mokky and sets this order's id to data's id
      } catch (err) {
        console.log(err)
      } finally {
        this.isCreatingOrder = false
      }
    }
  }
}*/
</script>-->

<template>
  <!--<div>
    <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
    <div class="fixed top-0 right-0 h-full w-96 bg-white z-20 p-8">
      <DrawerHead />
      <CartItemList />

      <div v-if="totalPrice === 0" class="flex h-full items-center">
        <InfosBlock
          v-if="orderId"
          class="text-center"
          title="Заказ оформлен!"
          image-url="/order-success-icon.png"
          :description="`Ваш заказ №${orderId} скоро будет передан курьерской службе`"
        />

        <InfosBlock
          v-if="!orderId"
          class="text-center"
          title="Корзина пустая"
          image-url="/package-icon.png"
          description="Добавьте хотя бы 1 пару кроссовок, чтобы сделать заказ."
        />
      </div>

      <div v-if="totalPrice" class="flex flex-col gap-4 mt-7">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ totalPrice }} rub.</b>
        </div>

        <div class="flex gap-2">
          <span>Налог (5%):</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ (totalPrice * 0.05).toFixed(0) }} rub.</b>
        </div>

        <button
          @click="createOrder"
          :disabled="buttonDisabled"
          class="mt-4 bg-lime-500 w-full rounded-xl py-3 text-white font-bold hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-300 cursor-pointer"
        >
          Оформить заказ
        </button>

      </div>
    </div>
  </div>-->

  <q-drawer
     v-model="modelValue"
    side="right"
    :width="350"
    bordered
    overlay
    show-if-above

  >

      <div style="height:100%;" class="q-pa-md q-gutter-md">
            <div class="flex items-center q-gutter-md">
                <q-icon @click="closeDrawer" class="cursor-pointer" name="arrow_back" color="grey-6" size="1.3rem"/>
                <q-item-label class="text-bold" style="font-size:1.3rem">Корзина</q-item-label>
            </div>



          <div v-if="props.totalPrice" class="flex col q-mt-lg " >
            <CartItemList/>

            <q-item-section style="width:100%"  class="q-my-lg ">
              <q-item dense class="flex justify-between q-py-xs q-px-xs">
                <span>Итого: </span>
                <div class="flex-1"></div>
                <b>{{props.totalPrice}} rub.</b>
              </q-item>

              <q-item dense class="flex justify-between q-py-xs q-px-xs">
                <span>Налог (5%): </span>
                <div class="flex-1"></div>
                <b>{{(props.totalPrice*0.05).toFixed(0)}} rub.</b>
              </q-item>

              <q-btn @click="createOrder" :disabled="buttonDisabled" class="bg-light-green-6 q-py-sm text-white text-bold q-mt-md"  style="width:100%;">Оформить заказ</q-btn>

            </q-item-section>


          </div>


        <q-item v-if="props.totalPrice===0" class="flex flex-center text-center items-center q-pa-xl" style="height:80%;" >
          <div  v-if="!orderId">
            <q-img :src="getBasePath + '/package-icon.png'" height="80px" width="80px"/>
            <div class="q-pa-md ">
              <b style="font-size:1.5rem">Корзина пустая</b>
              <p class="text-grey-7">Добавьте хотя бы 1 пару кроссовок, чтобы сделать заказ.</p>
            </div>
          </div>

          <div  v-if="orderId">
            <q-img :src="getBasePath + '/order-success-icon.png'"  width="80px"/>
            <div class="q-pa-md ">
              <b style="font-size:1.5rem">Заказ оформлен</b>
              <p class="text-grey-7">Ваш заказ №{{orderId}} скоро будет передан курьерской службе</p>
            </div>
          </div>
        </q-item>


      </div>

  </q-drawer>
</template>

<script setup>
import { ref, watch, defineEmits, inject, computed } from 'vue';
import axios from 'axios'
import CartItemList from "./CartItemList.vue"

const modelValue = ref(false);

// Links list can be imported or passed as a prop
const linksList = [

  // Add more links as needed
];

const emit = defineEmits(['close-drawer']);

function closeDrawer() {
  emit('close-drawer');
}

const props = defineProps({
  totalPrice: Number
})
const {mycart} = inject('mycart')
const isCreatingOrder = ref(false)
const orderId = ref(null)


  const createOrder = async() =>{
    try{
      isCreatingOrder.value = true
      const {data} = await axios.post('https://6e5e12b4bb07b2b5.mokky.dev/orders',{
        items: mycart.value,
        totalPrice: props.totalPrice
      })
      mycart.value = []
      orderId.value = data.id
      return data;

    } catch(err){console.log(err)}
    finally{
      isCreatingOrder.value=false
    }
  }

  const cartIsEmpty = computed(()=>mycart.value.length===0)
  const buttonDisabled = computed(()=>isCreatingOrder.value || cartIsEmpty.value)
  const getBasePath = computed(() => {
  return import.meta.env.MODE === 'production' ? '/quasar_sneakers' : '';
});

watch(modelValue, (newVal) => {
  console.log("Drawer open:", newVal);
});

</script>

