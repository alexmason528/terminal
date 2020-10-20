import { createAction } from 'redux-actions'
import { successAction, failAction } from 'utils/request-helpers'

export const LIST_ADDRESS = 'LIST_ADDRESS'
export const CREATE_ADDRESS = 'CREATE_ADDRESS'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const DELETE_ADDRESS = 'DELETE_ADDRESS'

export const listAddress = createAction(LIST_ADDRESS)
export const listAddressSuccess = createAction(successAction(LIST_ADDRESS))
export const listAddressFail = createAction(failAction(LIST_ADDRESS))

export const createAddress = createAction(CREATE_ADDRESS)
export const createAddressSuccess = createAction(successAction(CREATE_ADDRESS))
export const createAddressFail = createAction(failAction(CREATE_ADDRESS))

export const updateAddress = createAction(UPDATE_ADDRESS)
export const updateAddressSuccess = createAction(successAction(UPDATE_ADDRESS))
export const updateAddressFail = createAction(failAction(UPDATE_ADDRESS))

export const deleteAddress = createAction(DELETE_ADDRESS)
export const deleteAddressSuccess = createAction(successAction(DELETE_ADDRESS))
export const deleteAddressFail = createAction(failAction(DELETE_ADDRESS))
