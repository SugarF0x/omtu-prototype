<script setup lang="ts">
import Timeline from "./components/Timeline.vue"
import { DatePicker } from "v-calendar"
import data, { SpecialtyData, ClassData } from "~/assets/dummy_schedule"
import { format } from 'date-fns'

const subjects = data.subjects.reduce<Record<string, SpecialtyData>>((acc, val) => {
  acc[val.id] = val
  return acc
}, {})

const classes = data.classes.reduce<Record<string, ClassData[]>>((acc, val) => {
  for (const date of val.dates) {
    acc[date] ??= []
    acc[date].push(val)
  }
  return acc
}, {})

const date = ref(new Date())
const dateString = computed(() => format(date.value, 'dd.MM.yyyy'))

const todayClasses = computed(() => classes[dateString.value])
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="main-card">
          <date-picker v-model="date" mode="date" is-dark locale="ru" />

          <div>
            {{ dateString }}
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <timeline v-if="todayClasses?.length" />
          <v-card-text v-else>
            <h3>Сегодня занятий нет</h3>
          </v-card-text>
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

<!--suppress HtmlUnknownTarget -->
<style src="v-calendar/style.css" />
