<script setup lang="ts">
const tab = ref(null)
</script>

<template>
  <div>
    <h1>Интерактивная карта</h1>
    <h4>Изображения-заглушки</h4>

    <v-tabs v-model="tab">
      <v-tab value="one">Блок А</v-tab>
      <v-tab value="two">Блок Б</v-tab>
      <v-tab value="three">Блок В</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="one">
        <v-img src="/img/map/1.jpg" />
      </v-window-item>

      <v-window-item value="two">
        <v-img src="/img/map/2.jpg" />
      </v-window-item>

      <v-window-item value="three">
        <v-img src="/img/map/3.jpg" />
      </v-window-item>
    </v-window>

    <div class="text-right mt-2">
      Навигационный <a href="https://t.me/MGIMO_mapbot" target="_blank">Телеграмм Бот</a>
    </div>
  </div>
</template>
