<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated class="bg-blue-grey ">
      <q-toolbar>
        
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Drawer"
          @click.stop="toggleLeftDrawer"
        />
        
        <q-toolbar-title class="text-bold">Imbir App </q-toolbar-title>

        <!-- NOTIFICATIONS -->

        <q-btn
          flat
          dense
          round
          icon="notifications"
          aria-label="Notifications"
          size="1.2rem"
          @click.stop="toggleNotifications"
        >
          <q-badge
            v-if="unreadCount > 0"
            :label="unreadCount"
            color="cyan-5"
            align="top right"
            class="q-mr-xs"
          />
        </q-btn>

        <q-menu
          v-model="notificationsOpen"
          anchor="bottom right "
          self="top right "
          class="bg-white shadow-8 "
          style="width: 300px;"
          @hide="notificationsOpen = false"
        >
          <q-list>
            <q-item v-for="(notification, index) in notifications" :key="index" clickable>
              <q-item-section>
                <q-item-label>{{ notification.message }}</q-item-label>
                <q-item-label caption v-if="!notification.read">New</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>


        <!-- PROFILE -->
        <q-btn
              flat
              dense
              round
              icon="account_circle"
              aria-label="User Profile"
              size="1.2rem"
              @click.stop="toggleMenu"
        />

        <q-menu
        v-model="menuOpen"
        anchor="top right"
          self="bottom right"
        class="bg-white shadow-8 "
        style="width: 170px;"
        @hide="menuOpen = false"
        
        
        >
          <q-list>
            <q-item clickable v-ripple @click="goToProfile">
              <q-item-section avatar><q-icon name="person" /></q-item-section>
              <q-item-section>Profile</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="goToSettings">
              <q-item-section avatar><q-icon name="settings" /></q-item-section>
              <q-item-section>Settings</q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="logout">
              <q-item-section avatar><q-icon name="logout" /></q-item-section>
              <q-item-section>Logout</q-item-section>
            </q-item>      
          </q-list>
        </q-menu>
            
          
        
      </q-toolbar>


    </q-header>

    

    <q-drawer
      side="left"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-blue-grey-1 "
    >
      <q-list>

        <q-item-label header>
          MENU
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
          
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      
    </q-page-container>
  </q-layout>
</template>

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
    link: 'https://quasar.dev'
  },
  {
    title: 'Clients',
    caption: 'github.com/quasarframework',
    icon: 'group',
    link: 'https://github.com/quasarframework'
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
    link: 'https://awesome.quasar.dev'
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
    link: 'https://awesome.quasar.dev'
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
