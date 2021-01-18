import axios from 'axios'

const API_URL = process.env.REACT_APP_URL_PROD
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX

export function getOrders() {
  return axios.get(`${API_URL}/orders`)
}
