import { handleActions, combineActions } from 'redux-actions'
import { successAction, failAction } from 'utils/request-helpers'

import {
  LIST_ADDRESS,
  CREATE_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
} from './actions'

const initialState = {
  addresses: {
    pageSize: 10,
    currentPage: 1,
    totalCount: 0,
    results: [],
  },
  status: 'INIT',
  error: null,
}

export const reducer = handleActions(
  {
    [combineActions(
      LIST_ADDRESS,
      CREATE_ADDRESS,
      UPDATE_ADDRESS,
      DELETE_ADDRESS,
      successAction(CREATE_ADDRESS),
    )]: (state, { type }) => ({
      ...state,
      status: type,
      error: null,
    }),

    [successAction(LIST_ADDRESS)]: (state, { payload, type }) => ({
      ...state,
      addresses: payload,
      status: type,
    }),

    [successAction(UPDATE_ADDRESS)]: (state, { payload, type }) => ({
      ...state,
      addresses: {
        ...state.addresses,
        results: state.addresses.results.map((address) =>
          address.id === payload.id ? payload : address,
        ),
      },
      status: type,
    }),

    [failAction(
      LIST_ADDRESS,
      CREATE_ADDRESS,
      UPDATE_ADDRESS,
      DELETE_ADDRESS,
    )]: (state, { payload }) => ({
      ...state,
      status: false,
      error: payload,
    }),
  },
  initialState,
)
