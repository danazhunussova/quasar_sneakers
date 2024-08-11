<!--<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="props.link"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" color="cyan-10"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
defineOptions({
  name: 'EssentialLink'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  }
})
</script>
-->
<template>
  <q-item
    clickable
    v-if="!props.dropdown"
    tag="a"
    target="_blank"
    :href="props.link"
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" color="cyan-10" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-bold text-grey-14">{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
    v-if="props.dropdown"
    @click.stop="toggleDropdown"
    
  >
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" color="cyan-10" />
    </q-item-section>

    <q-item-section >
      <q-item-label class="text-bold text-grey-14">{{ props.title }}</q-item-label>
      
    </q-item-section>

    <q-item-section side >
      <q-icon
            v-if="!dropdownOpen"
            name="expand_more"
            class="q-ml-xs"
      />
      <q-icon
            v-else
            name="expand_less"
            class="q-ml-xs"
      />
    </q-item-section>
    
  </q-item>

  <q-list v-if="dropdownOpen" class="bg-grey-1 q-px-sm" >
    <EssentialLink
      v-for="(subItem, index) in props.dropdownItems"
      :key="index"
      v-bind="subItem" 
    />
  </q-list>
</template>

<script setup>
import { ref, computed } from 'vue';
defineOptions({
  name: 'EssentialLink'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  },

  dropdown: {
    type: Boolean,
    default: false
  },

  dropdownItems: {
    type: Array,
    default: () => []
  }
})

const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
</script>
