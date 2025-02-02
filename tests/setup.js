// tests/setup.js
import { config } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import { Quasar } from 'quasar';

// Import all needed Quasar components
import {
  QLayout,
  QPageContainer,
  QPage,
  QHeader,
  QDrawer,
  QToolbar,
  QBtn,
  QIcon,
  QItem,
  QItemSection,
  QItemLabel,
  QList,
  QCard,
  QCardSection,
  QCardActions,
  QImg,
  QDialog
} from 'quasar';

// Create object of Quasar components to register
const components = {
  QLayout,
  QPageContainer,
  QPage,
  QHeader,
  QDrawer,
  QToolbar,
  QBtn,
  QIcon,
  QItem,
  QItemSection,
  QItemLabel,
  QList,
  QCard,
  QCardSection,
  QCardActions,
  QImg,
  QDialog
};

// Register Quasar plugin
config.global.plugins.push([
  Quasar,
  {
    components
  }
]);

// Set up Vue Router with memory history for testing
const router = createRouter({
  history: createMemoryHistory(),
  routes: [] // Add your routes here if needed
});

// Register router
config.global.plugins.push(router);

// Optional: Add any global mocks or stubs
config.global.mocks = {
  // Add any global mocks here
};

config.global.stubs = {
  // Add any global stubs here
};