import { Ref } from 'vue'
export function useSort ({
  files,
  direc,
  index
}: {
  files: Ref<string[]>
  direc: string
  index: number
}) {
  const file = files.value
  if (direc === 'prev') {
    file.splice(index - 1, 2, file[index], file[index - 1])
  }
  if (direc === 'next') {
    file.splice(index, 2, file[index + 1], file[index])
  }
}

export function useRemove ({
  files,
  index
}: {
  files: Ref<string[]>
  index: number
}) {
  const file = files.value
  file.splice(index, 1)
}
