import { ref, defineStore } from '#imports'

const useUserStore = defineStore("counter", () => {
  const email = ref<null | string>(null)
  const name = ref<null | string>(null)

  return {
    email,
    name
  }
})

export default useUserStore
