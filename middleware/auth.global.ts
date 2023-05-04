import useUserStore from "~/stores/user"

export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/login') return

  const { name } = storeToRefs(useUserStore())
  if (!name.value) return navigateTo('/login')
})
