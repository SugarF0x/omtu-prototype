<script setup lang="ts">
import { ref } from '#imports'
import Timeline from "./components/Timeline.vue"
import { Calendar } from "v-calendar"
import data, { ClassData, SubjectData } from "~/assets/dummy_schedule"
import { format, parse } from 'date-fns'
import { AttributeConfig } from "v-calendar/src/utils/attribute"
import { CalendarDay } from "v-calendar/src/utils/page"
import { ru } from "date-fns/locale"

const DATE_FORMAT = 'dd.MM.yyyy'

const subjects = data.subjects.reduce<Record<string, SubjectData>>((acc, val) => {
  acc[val.id] = val
  return acc
}, {})

const classes = data.classes.reduce<Record<string, ClassData[]>>((acc, val) => {
  if (val.groups && !val.groups.includes(0)) return acc

  for (const date of val.dates) {
    acc[date] ??= []
    acc[date].push(val)
  }
  return acc
}, {})

const classAttributes = data.classes.reduce<Partial<AttributeConfig>[]>((acc, val) => {
  if (val.groups && !val.groups.includes(0)) return acc

  acc.push({
    key: val.id,
    dot: {
      style: {
        backgroundColor: subjects[val.subjectId].color
      }
    },
    dates: val.dates.map(date => parse(date, DATE_FORMAT, new Date())),
    popover: {
      label: subjects[val.subjectId].title
    }
  })
  return acc
}, [])

const date = ref(new Date())

const rawAttributes = [
  {
    key: 'today',
    highlight: true,
    dates: new Date()
  },
  ...classAttributes
]

const selectedDate = ref(new Date())
const formattedSelectedDate = computed(() => format(selectedDate.value, 'dd MMMM yyyy', { locale: ru }))

function handleDayClick(e: CalendarDay) {
  selectedDate.value = e.date
}

const attributes = computed(() => [...rawAttributes, { key: 'selected', bar: true, dates: selectedDate.value }])

const selectedClasses = computed(() => classes[format(selectedDate.value, DATE_FORMAT)])
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="main-card">
          <calendar
            :attributes="attributes as any"
            locale="ru"
            is-dark
            @dayclick="handleDayClick"
          />

          <div class="details">
            <div>
              Выбрано: {{ formattedSelectedDate }}
            </div>

            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi assumenda autem consequuntur, deleniti eaque earum est eum excepturi facilis, harum ipsum itaque iusto laborum minima mollitia nam nobis non officia quae quaerat qui recusandae reprehenderit saepe sed, sequi veritatis!
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <timeline v-if="selectedClasses?.length" :classes="selectedClasses" />
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
  gap: 16px;
  padding: 16px;

  .details {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>

<!--suppress HtmlUnknownTarget -->
<style src="v-calendar/style.css" />
