import { LangOptions } from 'utils/const'
import {
  SET_GLOBAL_PADDING_TOP,
  SET_LANG, SET_SCROLLING_STATUS,
  SET_SLIDES_QUANTITY, SET_VISIBLE_BANNER,
  TOGGLE_MODAL
} from 'store/actions/actionTypes'
import { updateObject } from 'utils'

const initialState = {
  lang: {
    label: LangOptions.RU,
    value: LangOptions.RU,
  },
  modal: {
    status: false,
    content: null
  },
  globalPaddingTop: 121,
  slidesQuantity: 0,
  isScrolling: false,
  visibleID: null
}

export function uiReducer (state = initialState, action) {
  switch (action.type) {
    case SET_LANG: return updateObject(state, { lang: action.payload })
    case TOGGLE_MODAL:
      return updateObject(state, { modal: {
        status: action.payload.status,
        content: action.payload.content,
      }})
    case SET_GLOBAL_PADDING_TOP: return updateObject(state, { globalPaddingTop: action.payload })
    case SET_SLIDES_QUANTITY: return updateObject(state, { slidesQuantity: action.payload })
    case SET_SCROLLING_STATUS: return updateObject(state, { isScrolling: action.payload })
    case SET_VISIBLE_BANNER: return updateObject(state, { visibleID: action.payload })
    default: return state
  }
}
