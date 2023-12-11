import { CATEGORIES_ACTION_TYPES } from "./category.types"

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  error: null,
  isLoading: false
}

export const categoriesReducer = (
  action = {},
  state = CATEGORIES_INITIAL_STATE
) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true
      }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: payload }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload }
    default:
      return state
  }
}
