// tests/setup.js
import { config } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
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

// Register Quasar components globally
config.global.components = {
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

// Set up Vue Router if used in your components
const router = createRouter({
  history: createWebHistory(),
  routes: [] // Add your routes here if needed
});

config.global.plugins = [router];
