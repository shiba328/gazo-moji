const useFiles = () => useState<string[]>('files', () => [])

export {
  useFiles
}
