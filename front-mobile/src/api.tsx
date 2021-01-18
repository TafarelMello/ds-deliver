import axios from 'axios'

const API_URL = process.env.REACT_NATIVE_APP_URL_PROD
const mapboxToken = process.env.REACT_NATIVE_APP_ACCESS_TOKEN_MAP_BOX

export function getOrders() {
  return axios.get(`https://tafarelmello-ds-deliver.herokuapp.com/orders`)
}

export function confirmDelivery(orderId: number) {
  return axios.put(
    `https://tafarelmello-ds-deliver.herokuapp.com/orders/${orderId}/delivered`,
  )
}
