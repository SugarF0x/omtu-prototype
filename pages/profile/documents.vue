<script setup lang="ts">
import { reactive } from '#imports'

const documents = reactive<string[]>([])

function addDocument() {
  documents.push(`Документ #${documents.length + 1}`)
}
</script>

<template>
  <v-container class="container">
    <v-card>
      <v-card-text>
        <div class="text-h1 text-right mb-2">
          Документы
        </div>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title class="d-flex">
        <div v-if="!documents.length" class="text-h5">Нет документов</div>
        <v-spacer />
        <v-btn color="primary" @click="addDocument">Запросить</v-btn>
      </v-card-title>

      <v-card-text v-if="documents.length" class="docs">
        <div v-for="(document, index) in documents" :key="index" class="d-flex">
          <div>{{ document }}</div>
          <v-spacer />
          <v-chip color="red" label>В обработке</v-chip>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.docs {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
