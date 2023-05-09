<script setup lang="ts">
import { format } from "date-fns"
import { ru } from "date-fns/locale"

const today = format(new Date(), 'dd MMMM yyyy', { locale: ru })
const time = format(new Date(), 'hh:mm')

const actions: Array<{ text: string, icon: string, callback?: () => void, to?: string }> = [
  { text: 'Сайт ОМТУ', icon: 'mdi-school-outline', to: 'https://omtu.info' },
  { text: 'Телеграм ОМТУ', icon: 'mdi-send-variant-outline' },
  { text: 'Бизнес-инкубатор', icon: 'mdi-handshake-outline' },
  { text: 'Нейролаборатория', icon: 'mdi-brain' },
  { text: 'Нейросеть OMTUGPT', icon: 'mdi-robot-outline' },
  { text: 'MGIMO MapBot' , icon: 'mdi-map-outline' },
]
</script>

<template>
  <v-row>
    <v-col cols="12" sm="3">
      <div class="side">
        <v-sheet rounded="lg" min-height="268" class="pa-4">
          <p>
            Добро пожаловать в личный кабинет студента ОМТУ!
          </p>
          <p>
            Экосистема Института Маркетинга и Предпринимательства (ИМИП) МГИМО - это сервисы, созданные для раскрытия Вашего потенциала и комфортного получения знаний.
          </p>
        </v-sheet>

        <v-sheet rounded="lg" class="py-1">
          <v-list density="compact">
            <v-list-item
              v-for="(action, i) in actions"
              :key="i"
              :value="action"
              active-color="primary"
              :href="action.to"
              target="_blank"
              @click="action.callback?.()"
            >
              <template v-slot:prepend>
                <v-icon :icon="action.icon"></v-icon>
              </template>

              <v-list-item-title v-text="action.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-sheet>

      </div>
    </v-col>

    <v-col class="content" cols="12" sm="7">
      <v-sheet v-for="(index) in 12" rounded="lg" class="pa-4">
        <div class="mb-4 text-h4">
          Публикация относящиеся к ролям пользователя #{{ index }}
        </div>

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda at commodi deserunt dolores, est ex maxime necessitatibus non, provident quo quod recusandae rerum velit, voluptas. Accusamus architecto corporis cum cupiditate doloremque ipsum libero nesciunt similique vero. Aliquam dicta facilis ipsam officia quae quibusdam quos tenetur? Ab aliquid aperiam aspernatur corporis delectus dicta ducimus et expedita labore laudantium libero obcaecati odit omnis, perferendis porro praesentium quae quis quisquam similique sunt! Adipisci aspernatur blanditiis dicta dolor dolorem dolores dolorum eaque earum esse exercitationem explicabo harum id, incidunt itaque labore nisi porro saepe sequi vel velit. Architecto beatae, culpa distinctio doloribus enim error est ex excepturi facere illum labore laboriosam mollitia nobis nulla possimus praesentium provident quae quam quas quidem reprehenderit soluta totam velit veniam voluptates. Amet illum magni officiis quia ratione tempore? Architecto aspernatur blanditiis corporis delectus dicta distinctio, dolorum eaque eum illum inventore iste necessitatibus nisi, omnis ratione repellat sed soluta. Delectus, hic laborum minus quidem quis vel. Architecto consequatur cumque doloribus expedita harum impedit inventore ipsum laborum minus, nemo nihil numquam odit officiis? Accusamus animi fugit placeat sit voluptate. Ad, at atque autem ea id incidunt ipsum, nobis numquam obcaecati pariatur perferendis, quidem quisquam sed sequi vero vitae voluptates.
      </v-sheet>
    </v-col>

    <v-col cols="12" sm="2" class="side">
      <div class="side">
        <v-sheet rounded="lg" class="py-4">
          <div class="text-h6 text-center px-4">{{ today }}</div>
          <div class="text-h6 text-center px-4">{{ time }}</div>

          <v-divider class="my-4" />

          <div class="text-center px-4">
            Сейчас по расписанию ничего нет
          </div>
        </v-sheet>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.side {
  position: sticky;
  top: 64px;
  word-break: break-word;

  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
