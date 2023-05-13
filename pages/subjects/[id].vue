<script setup lang="ts">
import data from "~/assets/dummy_schedule"
import getPlaceholderImageUrl from "~/utils/getPlaceholderImageUrl"

const route = useRoute()
const subject = computed(() => data.subjects.find(subject => subject.id === route.params.id))
</script>

<template>
  <div>
    <div v-if="!subject">
      <h1>404: предмет {{ route.params.id }} не найден</h1>
    </div>
    <div v-else>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-card>
              <v-img :src="getPlaceholderImageUrl(subject.color, subject.title)" />
              <v-card-title>
                {{ subject.title }}
              </v-card-title>
            </v-card>

            <v-card>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque consectetur deserunt doloremque eligendi eos est excepturi facere fugiat impedit, inventore ipsa laborum libero, magnam neque quod sint voluptates? Accusantium aliquid commodi esse laboriosam nulla numquam placeat sint sunt voluptatibus!
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="8" class="content">
            <v-card>
              <v-card-title>
                Различного рода информация по предмету
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt, labore laboriosam obcaecati temporibus unde voluptatum! Aut consectetur eius enim eos, eveniet hic id illum maxime neque nobis non optio provident qui quis quod sapiente suscipit, vitae voluptas voluptate voluptatum.
              </v-card-text>
            </v-card>

            <v-sheet rounded="lg" class="pa-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, beatae, est. Aspernatur dolore maxime nemo possimus! Accusamus ad, adipisci amet animi delectus dicta ducimus est ex explicabo fugit laboriosam maxime, nam necessitatibus numquam officia optio pariatur qui quisquam quo quod sed sint vero voluptatem? Alias architecto delectus dicta esse inventore, molestiae officia saepe! Excepturi, ipsam, sit. Animi aut commodi cum cumque dolore enim laudantium quasi ratione saepe sapiente? Ad aliquid deleniti deserunt, dolores esse illum ipsam labore laboriosam, maiores officia rem rerum sint sit suscipit voluptates. Beatae consequuntur deleniti dolor est excepturi facilis, ipsa iste maiores nemo nesciunt qui tempora tempore ut. Accusantium alias aut eum, fuga hic incidunt minima minus necessitatibus nemo nulla numquam omnis, porro possimus provident quaerat quo reprehenderit saepe sit totam unde. Blanditiis eaque ipsam laborum neque omnis possimus quaerat quidem quo sapiente ullam? Ab consequatur culpa cumque deserunt dolore eligendi est explicabo facere id, ipsam modi quasi quisquam quos soluta tempore. Aliquid assumenda dolorum eveniet facilis labore neque perferendis, quod sed ullam voluptatem! Cumque molestiae natus quos tempora vero. Adipisci aperiam aspernatur consectetur dolor eaque harum modi natus quae reiciendis suscipit. Aperiam commodi, consequatur hic nulla, obcaecati officia praesentium provident sunt tenetur ullam velit vero.
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
