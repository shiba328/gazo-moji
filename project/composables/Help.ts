import { useIsDialog } from '@/composables/state/Default'

export const useHelp = () => {
  //
  const isDialog = useIsDialog()
  //
  const getPost = ref<string>('');
  //
  (async () => {
    const nuxtApp = useNuxtApp()
    const { data } = await useAsyncData('doc', () => $fetch('/api/doc'))
    getPost.value = nuxtApp.$mdit.render(data.value)
  })()

  const onClose = () => {
    isDialog.value = false
  }

  return {
    getPost,
    onClose
  }
}
