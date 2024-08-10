<template>
  <q-page class="flex flex-center">

    
    <div class="row q-col-gutter-md q-py-md">
            <q-col v-for="procedure in procedures" :key="procedure.name" cols="12" sm="6" md="4">
              <q-card>
                <q-card-section>
                  <div class="text-h6">{{ procedure.name }}</div>
                  <div class="text-subtitle2">Duration: {{ procedure.duration }}</div>
                </q-card-section>

                <q-card-actions>
                  <q-btn color="primary" @click="makeAppointment(procedure.name)">Make Appointment</q-btn>
                </q-card-actions>
              </q-card>
            </q-col>
          </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
