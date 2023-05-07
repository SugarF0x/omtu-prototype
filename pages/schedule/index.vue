<script setup lang="ts">
import { ref } from '#imports'
import Timeline from "./components/Timeline.vue"
import { Calendar } from "v-calendar"
import data, { SubjectData } from "~/assets/dummy_schedule"
import { format, parse } from 'date-fns'
import { AttributeConfig } from "v-calendar/src/utils/attribute"

const DATE_FORMAT = 'dd.MM.yyyy'

const subjects = data.subjects.reduce<Record<string, SubjectData>>((acc, val) => {
  acc[val.id] = val
  return acc
}, {})

const classes = data.classes.reduce<Partial<AttributeConfig>[]>((acc, val) => {
  acc.push({
    key: val.id,
    dot: {
      style: {
        backgroundColor: subjects[val.subjectId].color
      }
    },
    dates: val.dates.map(date => parse(date, DATE_FORMAT, new Date()))
  })
  return acc
}, [])

const date = ref(new Date())
const dateString = computed(() => format(date.value, DATE_FORMAT))

const todayClasses = computed(() => classes[dateString.value])

const attributes = [
  {
    key: 'today',
    bar: true,
    dates: new Date()
  },
  ...classes
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="main-card">
          <calendar :attributes="attributes as any" v-model="date" is-dark locale="ru" />

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
