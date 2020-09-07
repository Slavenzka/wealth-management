import {
  SET_GLOBAL_PADDING_TOP,
  SET_LANG, SET_SCROLLING_STATUS,
  SET_SLIDES_QUANTITY, SET_VISIBLE_BANNER,
  TOGGLE_MODAL
} from 'store/actions/actionTypes'

export const setLang = lang => {
  return {
    type: SET_LANG,
    payload: lang
  }
}

export const toggleModal = (status, content) => {
  return {
    type: TOGGLE_MODAL,
    payload: {
      status,
      content
    }
  }
}

export const setGlobalPaddingTop = padding => ({
  type: SET_GLOBAL_PADDING_TOP,
  payload: padding
})

export const setSlidesQuantity = quantity => ({
  type: SET_SLIDES_QUANTITY,
  payload: quantity
})

export const setScrollingStatus = status => ({
  type: SET_SCROLLING_STATUS,
  payload: status
})

export const setVisibleBanner = id => ({
  type: SET_VISIBLE_BANNER,
  payload: id
})
