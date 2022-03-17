export type DIRECS = 'next' | 'prev'

export const useItem = ({ props, emit }) => {
  const isShow = ref(false)

  const onHover = (flg: boolean) => {
    isShow.value = flg
  }

  const onClick = (direc: DIRECS) => {
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
