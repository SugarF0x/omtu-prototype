<script setup lang="ts">
import { ref, reactive } from '#imports'
import useUserStore from "~/stores/user"

definePageMeta({
  layout: "clear",
})

const { email, name } = storeToRefs(useUserStore())

const emailField = ref('')
const password = ref('')
const errors = reactive({ email: '', password: '' })

const isLoading = ref(false)
function submit() {
  isLoading.value = true

  setTimeout(() => {
    if (emailField.value !== 'student@mgimo.ru') errors.email = 'Неправильная почта'
    else if (password.value !== '1234') errors.password = 'Неправильный пароль'

    if (!errors.email && !errors.password) {
      email.value = emailField.value
      name.value = 'Иван Иванов'
      navigateTo('/')
    }

    isLoading.value = false
  }, 1500)
}
</script>

<template>
  <div class="wrapper">
    <v-sheet width="300" class="card">
      <div class="header">
        <v-img src="/logo.png" class="flex-0-0" width="64" height="64" />
        <h1 class="title text-h2">Вход</h1>
      </div>

      <form @submit.prevent="submit">
        <v-text-field
          v-model="emailField"
          type="mail"
          label="Почта"
          placeholder="student@mgimo.ru"
          :error-messages="errors.email"
          required
        />

        <v-text-field
          v-model="password"
          type="password"
          label="Пароль"
          :error-messages="errors.password"
          required
        />

        <v-btn type="submit" class="bg-primary" :loading="isLoading">
          Войти
        </v-btn>
      </form>
    </v-sheet>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

.header {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 8px;
}

.title {
  margin-bottom: 12px;
  text-align: center;
}

.card {
  padding: 16px;
  border-radius: 16px;
}
</style>
