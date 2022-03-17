export const useHelp = () => {
  //
  const getPost = ref<string>('')
  const isHelp = ref(false)
  //
  ;(async () => {
    const nuxtApp = useNuxtApp()
    const { data } = await useAsyncData('doc', () => $fetch('/api/doc'))
    getPost.value = nuxtApp.$mdit.render(data.value)
  })()

  const onToggleHelp = () => {
    isHelp.value = !isHelp.value
    useMeta({
      bodyAttrs: { class: isHelp.value ? 'isDialog' : '' }
    })
  }

  return {
    getPost,
    onToggleHelp,
    isHelp
  }
}
