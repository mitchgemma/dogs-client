import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllDogs = () => {
  return axios(`${apiUrl}/dogs`)
}

// show function
export const getOneDog = (dogId) => {
  return axios(`${apiUrl}/dogs/${dogId}`)
}
