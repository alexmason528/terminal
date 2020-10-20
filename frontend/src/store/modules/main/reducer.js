import { handleActions } from 'redux-actions'
import { successAction, failAction } from 'utils/request-helpers'
import { LIST_ADDRESS } from './actions'

const initialState = {
  data: {
    address: [],
  },
  status: 'INIT',
  error: null,
}

export const reducer = handleActions(
  {
    [LIST_ADDRESS]: (state, { type }) => ({
      ...state,
      status: type,
      error: null,
    }),

    [successAction(LIST_ADDRESS)]: (state, { payload, type }) => ({
      ...state,
      data: payload,
      loading: type,
    }),

    [failAction(LIST_ADDRESS)]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  initialState,
)
