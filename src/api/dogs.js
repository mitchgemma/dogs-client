import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllDogs = () => {
  return axios(`${apiUrl}/dogs`)
}
