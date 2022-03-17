import * as htmlToImage from 'html-to-image'

export const usePreview = () => {
  const isSave = ref(false)
  const isCopy = ref(false)
  const isLoad = ref(false)
  const downloadImg = ref('')
  const downloadImgData = ref('')

  const getImgBlob = async () => {
    const node = document.getElementById('canvas')

    if (node) {
      return await htmlToImage.toPng(node, { pixelRatio: 1 })
        .then((dataUrl) => {
          return {
            code: '200',
            data: dataUrl
          }
        })
        .catch((error) => {
          return {
            code: '403',
            data: error
          }
        })
    } else {
      return {
        code: '404',
        data: 'not find'
      }
    }
  }
  getImgBlob().then(({ code, data }) => {
    if (code === '200') {
      downloadImg.value = data
      getImgDate(data)
      isLoad.value = true
    }
  })

  const getImgDate = (data) => {
    const img = new Image()
    img.onload = () => {
      const w = img.naturalWidth
      const h = img.naturalHeight
      downloadImgData.value = `幅:${w}px 高さ:${h}px`
    }
    img.src = data
  }

  const onDownload = () => {
    const link = document.createElement('a')
    link.download = `${new Date().getTime()}.png`
    link.href = downloadImg.value
    link.click()
    isSave.value = true
  }

  const onCopy = () => {
    const url = 'https://gazo-moji.netlify.app/'
    navigator.clipboard.writeText(url).then(() => {
      return true
    })
    isCopy.value = true
  }

  return {
    onDownload,
    onCopy,
    downloadImg,
    downloadImgData,
    isSave,
    isCopy,
    isLoad
  }
}
