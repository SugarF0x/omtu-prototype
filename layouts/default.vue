<script setup lang="ts">
import useUserStore from "~/stores/user"

const { name } = storeToRefs(useUserStore())

const links = [
  ['/', 'Главная'],
  ['/subjects', 'Предметы'],
  ['/schedule', 'Расписание'],
  ['/map', 'Карта'],
  ['/career', 'Карьера'],
]

const route = useRoute()

const hideSlider = computed(() => !links.map(item => item[0]).includes(route.path))
</script>

<template>
  <v-app-bar class="px-3" flat density="compact">
    <div class="side-tab">
      <v-btn to="/" :active="false">
        <v-avatar size="32" image="/logo.png" />
        <div class="title">ОМТУ Прототип</div>
      </v-btn>
    </div>

    <v-tabs class="center-tabs" centered color="grey-darken-2" :hide-slider="hideSlider">
      <v-tab v-for="([link, title]) in links" :key="link" :to="link">
        {{ title }}
      </v-tab>
    </v-tabs>

    <div class="side-tab right">
      <v-btn icon to="/messages" :active="false">
        <v-badge content="2" color="error">
          <v-icon>mdi-email-outline</v-icon>
        </v-badge>
      </v-btn>

      <v-btn to="/profile" :active="false">
        <div class="name">{{ name }}</div>
        <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32" image="/img/avatar.jpg" />
      </v-btn>
    </div>
  </v-app-bar>

  <v-main>
    <v-container>
      <slot />
    </v-container>
  </v-main>
</template>

<style lang="scss" scoped>
.side-tab {
  display: flex;
  flex: 1;
  align-items: center;

  gap: 12px;

  &:last-child {
    justify-content: flex-end;
  }

  &.right {
    gap: 0;
  }
}

.title {
  margin-left: 8px;
}

.name {
  margin-right: 8px;
  margin-left: 8px;
}
</style>
