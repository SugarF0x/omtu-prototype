<script setup lang="ts">
import data from "~/assets/dummy_schedule"
import getPlaceholderImageUrl from "~/utils/getPlaceholderImageUrl"
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="subject in data.subjects"
        :key="subject.id"
        cols="4"
        class="col"
      >
        <v-card class="card" :to="`/subjects/${subject.id}`">
          <v-img
            :src="getPlaceholderImageUrl(subject.color, subject.title)"
            width="600"
            aspect-ratio="2"
          />

          <v-card-title>
            {{ subject.title }}
          </v-card-title>

          <v-card-text>
            {{ subject.professor }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.col {
  display: flex;
  align-items: stretch;
}

.card {
  transition: transform ease-in-out .2s;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.05, 1.05);
  }

  &:active {
    transform: scale(1, 1);
  }
}
</style>
