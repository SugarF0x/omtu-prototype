<script setup lang="ts">
const cards = reactive(['Today', 'Yesterday'])
const drawer = ref(null)
const links = reactive([
  ['mdi-new-box', 'Новое'],
  ['mdi-radiobox-marked', 'Просмотрено'],
])
</script>

<template>
  <div>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>

          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container
      class="py-8 px-6"
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
        >
          <v-card>

            <v-list :lines="'two'">
              <v-list-subheader>{{ card }}</v-list-subheader>
              <template v-for="n in 6" :key="n">
                <v-list-item>
                  <template v-slot:prepend>
                    <v-avatar color="grey-darken-1"></v-avatar>
                  </template>

                  <v-list-item-title>Message {{ n }}</v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item>

                <v-divider
                  v-if="n !== 6"
                  :key="`divider-${n}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">

</style>
