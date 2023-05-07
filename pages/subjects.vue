<script setup lang="ts">
import data from "~/assets/dummy_schedule"
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
        <v-card self-stretch>
          <v-img
            :src="`http://placehold.it/600x300/${subject.color.replace('#', '')}/ffffff.jpg&text=${subject.title}`"
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
}
</style>
