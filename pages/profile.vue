<script setup lang="ts">
import useUserStore from "~/stores/user"

const { name } = storeToRefs(useUserStore())
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="column">
        <v-card class="profile-card">
          <v-card-title class="title">
            <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="128" image="/img/avatar.jpg" />
            <div class="text-h4">
              {{ name }}
            </div>
          </v-card-title>

          <v-card-subtitle class="text-center">
            ОМТУ I
          </v-card-subtitle>

          <v-card-text class="text-center">
            Digital-маркетинг
          </v-card-text>
        </v-card>

        <v-card>
          ROLES
        </v-card>
      </v-col>

      <v-col cols="8" class="column">
        <v-card>
          INFO
        </v-card>

        <v-card>
          GRADES
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.profile-card {
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
}
</style>
