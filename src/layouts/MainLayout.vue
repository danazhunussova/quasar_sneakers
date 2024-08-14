<!--

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Staff',
    caption: 'quasar.dev',
    icon: 'business_center',
    dropdown: true,
    dropdownItems: [
      {
        title: 'User Settings',
        caption: 'Manage user settings',
        link: 'https://awesome.quasar.dev/user-settings',
        icon: 'person'
      },
      {
        title: 'App Settings',
        caption: 'Manage app settings',
        link: 'https://awesome.quasar.dev/app-settings',
        icon: 'build'
      }
    ]
  },
  {
    title: 'Clients',
    caption: 'github.com/quasarframework',
    icon: 'group',
    dropdown: true,
    dropdownItems: [
      {
        title: 'Client Database',
        caption: 'Manage user settings',
        link: 'https://awesome.quasar.dev/user-settings',
        icon: 'person'
      },
      {
        title: 'Client Categories',
        caption: 'Manage app settings',
        link: 'https://awesome.quasar.dev/app-settings',
        icon: 'build'
      },
      {
        title: 'Loyalty Program',
        caption: 'Manage app settings',
        link: 'https://awesome.quasar.dev/app-settings',
        icon: 'build'
      },
    ]
  },
  {
    title: 'Analytics',
    caption: '@QuasarFramework',
    icon: 'insert_chart',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Finance',
    caption: 'Community Quasar projects',
    icon: 'credit_card',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Payroll',
    caption: 'Community Quasar projects',
    icon: 'fact_check',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Inventory',
    caption: 'Community Quasar projects',
    icon: 'inventory',
    dropdown: true,
    dropdownItems: [
      {
        title: 'Storages',
        link: 'https://awesome.quasar.dev/user-settings',

      },
      {
        title: 'Products',

        link: 'https://awesome.quasar.dev/app-settings',

      },
      {
        title: 'Bills of materials',

        link: 'https://awesome.quasar.dev/app-settings',

      },
    ]
  },
  {
    title: 'Loyalty',
    caption: 'Community Quasar projects',
    icon: 'loyalty',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Settings',
    caption: 'Community Quasar projects',
    icon: 'settings',
    dropdown: true,
    dropdownItems: [
      {
        title: 'User Settings',
        caption: 'Manage user settings',
        link: 'https://awesome.quasar.dev/user-settings',
        icon: 'person'
      },
      {
        title: 'App Settings',
        caption: 'Manage app settings',
        link: 'https://awesome.quasar.dev/app-settings',
        icon: 'build'
      }
    ]
  },
  {
    title: 'Help & Support',
    caption: 'Community Quasar projects',
    icon: 'help',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Billing',
    caption: 'Community Quasar projects',
    icon: 'credit_score',
    link: 'https://awesome.quasar.dev'
  }
]

const leftDrawerOpen = ref(false)
const menuOpen = ref(false)

const notificationsOpen = ref(false)
const unreadCount = ref(2)

const notifications = ref([
  { message: 'New appointment reminder', read: false },
  { message: 'Follow up with client', read: false },
  // Add more notifications as needed
])

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleNotifications() {
  if (menuOpen.value) {
    menuOpen.value = false; // Close profile menu if it's open
  }
  notificationsOpen.value = !notificationsOpen.value;

}

function toggleMenu() {
  if (notificationsOpen.value){
    notificationsOpen.value = false;
  }
   menuOpen.value = !menuOpen.value

}

function goToProfile() {
  // Navigate to the profile page
  // Add your router logic here, for example:
  // router.push('/profile')
  menuOpen.value = false
}

function goToSettings() {
  // router.push('/settings')
  menuOpen.value = false // Close the dropdown
}

function logout() {
  menuOpen.value = false
}
</script>
-->
<template>

<div>
  <div class=" bg-light-green-1 " >


    <q-layout view="lHh lpr lFf" container style="height: 100vh" >
      <Drawer v-model="rightDrawerOpen" @close-drawer="toggleRightDrawer" :totalPrice="totalPrice"/>
      <div class="shadow-2 rounded-borders bg-white">
        <Header @toggle-drawer="toggleRightDrawer" :totalPrice="totalPrice"/>
        <q-page-container>
            <router-view />
        </q-page-container>
      </div>

    </q-layout>
  </div>
</div>

</template>


<script setup>
  import Header from "../components/Header.vue";
  import Drawer from "../components/Drawer.vue";
  import Cardlist from "../components/Cardlist.vue"

  import { onMounted, watch, reactive, provide, computed, ref } from 'vue';
  import axios from 'axios';

  // Ref for controlling the right drawer state
  const rightDrawerOpen = ref(false);

  // Function to toggle the right drawer
  function toggleRightDrawer() {

    console.log('Toggling Drawer');
    rightDrawerOpen.value = !rightDrawerOpen.value;
    console.log(rightDrawerOpen.value);
  }

  const mycart = ref([]);
  const totalPrice = computed (() => mycart.value.reduce((acc,item) =>acc+item.price, 0))

  const addToCart = (item) => {
    mycart.value.push(item)
    item.isAdded = true
  }
  const removeFromCart = (item) => {
    mycart.value.splice(mycart.value.indexOf(item),1)
    item.isAdded = false
  }

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


  watch(mycart, ()=>{
    localStorage.setItem('mycart', JSON.stringify(mycart.value))
  },
  {deep:true}
  )
  provide('mycart',{mycart,addToCart,removeFromCart})
</script>
