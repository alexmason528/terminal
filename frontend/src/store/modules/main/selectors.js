import { get } from 'lodash'

export const selectAddressData = (state) => get(state, 'main.data')

export const selectAddressStatus = (state) => get(state, 'main.status')

export const selectAddressError = (state) => get(state, 'main.error')
