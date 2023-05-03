<script setup lang="ts">
const links = [
  ['/', 'Главная'],
  ['/subjects', 'Предметы'],
  ['/schedule', 'Расписание'],
  ['/map', 'Карта'],
]
</script>

<template>
  <v-app-bar class="px-3" flat density="compact">
    <v-avatar color="grey-darken-1" size="32" />

    <v-spacer />

    <v-tabs centered color="grey-darken-2">
      <v-tab v-for="([link, title]) in links" :key="link" :to="link">
        {{ title }}
      </v-tab>
    </v-tabs>

    <v-spacer />

    <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32" />
  </v-app-bar>

  <v-main>
    <v-container>
      <slot />
    </v-container>
  </v-main>
</template>

<style scoped>

</style>
