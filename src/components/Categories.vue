<template>
    <div  >


       <q-btn color="primary" class="bg-grey-9" @click="openAddCategoryDialog">Add Category</q-btn>
        
        <div class="col q-py-md">
          <q-col v-for="category in clientCategories" :key="category.name" >
            <q-card class="q-my-sm">
              <q-card-section class="flex justify-between items-center">
                <div class="flex items-center">
                  <q-icon name="circle" :color="category.color" />
                  <div class="text-h6 q-px-md">{{ category.name }}</div>
                </div>
                <q-card-actions @click="openEditCategoryDialog(category)">
                  <q-icon name="edit" size="1.3rem" color="grey-9" />
                </q-card-actions>
              </q-card-section>
            </q-card>
          </q-col>
        </div>


        <q-dialog v-model="categoryDialogOpen" >
        <q-card >
          <q-card-section>
            <div class="text-h6">{{ isEditMode ? 'Edit' : 'Add' }} Category</div>
          </q-card-section>

          <q-card-section>
            <q-input  filled v-model="categoryName" label="Category Name" />
            <q-input filled v-model="categoryColor" label="Category Color" />
          </q-card-section>

          <q-card-actions align="right">
            
            
            <q-btn v-if="isEditMode" flat label="Delete Category" color="negative" @click="confirmDeleteCategory" />

            <q-btn flat label="Save" color="primary" @click="saveCategory" />
          </q-card-actions>
        </q-card>
        </q-dialog>


        <q-dialog v-model="confirmDeleteDialogOpen">
          <q-card>
            <q-card-section>
              <div class="text-h6">Delete Category</div>
              <p>Are you sure you want to delete the category "{{ categoryName }}"?</p>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="primary" @click="closeConfirmDeleteDialog" />
              <q-btn flat label="Delete" color="negative" @click="deleteCategory" />
            </q-card-actions>
          </q-card>
        </q-dialog>


    </div>
</template>


<script setup>
import { ref } from 'vue'

const clientCategories = ref([
  { name: 'VIP', color: 'yellow' },
  { name: 'Loyal', color: 'green' },
  { name: 'Permanent', color: 'blue' },
]);

const appointmentCategories = ref([
  { name: 'Full Online Payment', color: 'green' },
  { name: 'Partial Online Payment', color: 'yellow' },
  { name: 'This Specialist Only', color: 'red' },
  { name: 'Any Staff Member', color: 'blue' },
]);

const categoryDialogOpen = ref(false);
const isEditMode = ref(false);
const categoryName = ref('');
const categoryColor = ref('');
const confirmDeleteDialogOpen = ref(false);
let editingCategoryIndex = null;


function openAddCategoryDialog() {
  isEditMode.value = false;
  categoryName.value = '';
  categoryColor.value = '';
  categoryDialogOpen.value = true;
}

function openEditCategoryDialog(category) {
  isEditMode.value = true;
  categoryName.value = category.name;
  categoryColor.value = category.color;
  editingCategoryIndex = clientCategories.value.indexOf(category);
  categoryDialogOpen.value = true;
}

function closeCategoryDialog() {
  categoryDialogOpen.value = false;
}

function saveCategory() {
  if (isEditMode.value && editingCategoryIndex !== null) {
    clientCategories.value[editingCategoryIndex].name = categoryName.value;
    clientCategories.value[editingCategoryIndex].color = categoryColor.value;
  } else {
    clientCategories.value.push({
      name: categoryName.value,
      color: categoryColor.value,
    });
  }
  closeCategoryDialog();
}



function confirmDeleteCategory() {
  confirmDeleteDialogOpen.value = true;
}

function closeConfirmDeleteDialog() {
  confirmDeleteDialogOpen.value = false;
}

function deleteCategory() {
  if (editingCategoryIndex !== null) {
    clientCategories.value.splice(editingCategoryIndex, 1);
  }
  closeConfirmDeleteDialog();
  closeCategoryDialog();
}
/*
function makeAppointment(procedureName) {
  if (!selectedDate.value) {
    console.log('Please select a date before making an appointment.');
    return;
  }

  console.log(`Appointment for ${procedureName} on ${selectedDate.value.toLocaleDateString()}`);
  // Here you can proceed with making an appointment, for example, navigate to an appointment page
}
*/
</script>
