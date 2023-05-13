<script setup lang="ts">
import data, { ClassData, SubjectData } from "assets/dummy_schedule"

const subjects = data.subjects.reduce<Record<string, SubjectData>>((acc, val) => {
  acc[val.id] = val
  return acc
}, {})

const props = defineProps<{
  classes: ClassData[]
}>()
</script>

<template>
  <v-timeline side="end" align="start">
    <v-timeline-item
      v-for="item in classes"
      :key="item.id"
      :dot-color="subjects[item.subjectId].color"
      size="small"
    >
      <div class="d-flex">
        <strong class="me-4">{{ item.time.split(' - ')[0] }}</strong>
        <div>
          <strong>{{ subjects[item.subjectId].title }}</strong>
          <div class="text-caption">
            Аудитория: {{ item.room }}
          </div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
