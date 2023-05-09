<script setup lang="ts">
defineProps<{
  title: string
  tags: number[]
}>()
</script>

<template>
  <v-sheet rounded="lg" class="pa-4 publication">
    <div class="text-h4">
      {{ title }}
    </div>

    <slot />

    <div>
      <tags :types="tags" />
    </div>
  </v-sheet>
</template>

<style scoped lang="scss">
.publication {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
