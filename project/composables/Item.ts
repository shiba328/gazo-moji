export const useItem = ({ props, emit }) => {
  const isShow = ref(false)

  const onHover = (flg) => {
    isShow.value = flg
  }

  const onClick = (direc) => {
    if (
      (direc === 'next' && props.total - 1 !== props.index) ||
      (direc === 'prev' && props.index !== 0)
    ) {
      emit('sort', { direc, index: props.index })
    }
  }

  return {
    isShow,
    onClick,
    onHover
  }
}
