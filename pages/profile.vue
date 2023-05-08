<script setup lang="ts">
import useUserStore from "~/stores/user"

const { name } = storeToRefs(useUserStore())

const roles: Array<{ color: string, text: string }> = [
  { text: 'ОМТУ', color: 'cyan',  },
  { text: 'Digital-маркетинг', color: 'blue' },
  { text: 'Академ группа 1', color: 'orange' },
  { text: 'Языковая 2', color: 'green' },
  { text: "МЭО (выпуск '21)", color: 'brown' }
]
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

          <v-card-text class="text-center">
            <v-chip v-for="role in roles" :key="role.text" :color="role.color" class="ma-2" label >
              {{ role.text }}
            </v-chip>
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
