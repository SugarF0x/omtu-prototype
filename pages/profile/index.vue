<script setup lang="ts">
import useUserStore from "~/stores/user"

const { name } = storeToRefs(useUserStore())

const actions: Array<{ text: string, icon: string, callback?: () => void, to?: string }> = [
  { text: 'Документы и справки', icon: 'mdi-file-document-multiple-outline', to: '/profile/documents' },
  { text: 'Выйти из аккаунта', icon: 'mdi-logout', callback: () => { localStorage.clear(); location.reload() } },
]

const grades = Array.from({ length: 9 }, () => Array.from({ length: 2 }, () => Math.floor(Math.random() * 100)))
const gradeTitles = ['Успеваемость', 'Посещаемость']
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
            <tags :types="[0,1,2,3,4]" />
          </v-card-text>
        </v-card>

        <v-card>
          <v-list density="compact">
            <v-list-item
              v-for="(action, i) in actions"
              :key="i"
              :value="action"
              active-color="primary"
              :to="action.to"
              @click="action.callback?.()"
            >
              <template v-slot:prepend>
                <v-icon :icon="action.icon"></v-icon>
              </template>

              <v-list-item-title v-text="action.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="8" class="column">
        <v-card>
          <v-card-title>
            Инфо
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dignissimos dolores doloribus enim eos, eveniet, labore magnam molestias mollitia officia pariatur perspiciatis possimus, qui unde. Architecto ducimus, soluta. Adipisci autem deserunt, distinctio doloribus eius et excepturi facere fuga incidunt itaque iusto magnam maiores minus nam, nemo optio pariatur perferendis perspiciatis quam qui ratione, reiciendis repellat similique soluta suscipit temporibus voluptate voluptatum. Ab ad at delectus deleniti, doloribus earum eius esse est eum fugit libero modi nesciunt nulla numquam odio omnis optio, pariatur reiciendis rem repellat reprehenderit saepe similique veritatis vero vitae. Consequuntur maxime molestiae pariatur provident tempore velit vero.
          </v-card-text>
        </v-card>

        <v-row>
          <v-col v-for="(value, index) in grades" :key="index" cols="4">
            <v-card>
              <v-card-title>
                Дисциплина #{{ index + 1 }}
              </v-card-title>

              <v-card-text>
                <div v-for="(title, index) in gradeTitles" :key="title" class="progress">
                  <div class="text-h6">{{ title }}</div>
                  <v-progress-linear :model-value="value[index]" color="cyan" />
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
