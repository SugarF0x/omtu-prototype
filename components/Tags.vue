<script setup lang="ts">
defineProps<{
  types: number[]
}>()

const roles: Array<{ color: string, text: string }> = [
  { text: 'ОМТУ', color: 'cyan',  },
  { text: 'Digital-маркетинг', color: 'blue' },
  { text: 'Академ группа 1', color: 'orange' },
  { text: 'Языковая 2', color: 'green' },
  { text: "МЭО (выпуск '21)", color: 'brown' }
]
</script>

<template>
  <v-chip v-for="type in types" :key="roles[type].text" :color="roles[type].color" class="ma-2" label >
    {{ roles[type].text }}
  </v-chip>
</template>

<style scoped lang="scss">

</style>
