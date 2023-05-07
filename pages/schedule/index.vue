<script setup lang="ts">
import Timeline from "./components/Timeline.vue"
import { DatePicker } from "v-calendar"
import data from "~/assets/dummy_schedule"

const date = ref(new Date())
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="main-card">
          <date-picker v-model="date" mode="date" is-dark locale="ru" />

          <div>
            {{ date }}
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <timeline />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.main-card {
  display: flex;
  padding: 16px;
}
</style>

<style src="v-calendar/style.css" />
