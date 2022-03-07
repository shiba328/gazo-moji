export function useSort ({ files, direc, index }) {
  const file = files.value
  if (direc === 'prev') {
    file.splice(index - 1, 2, file[index], file[index - 1])
  }
  if (direc === 'next') {
    file.splice(index, 2, file[index + 1], file[index])
  }
}

export function useRemove ({ files, index }) {
  const file = files.value
  file.splice(index, 1)
}
