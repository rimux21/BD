import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  },
})


export default async ({ Vue }) => {
    Vue.prototype.$axios = axiosInstance
}

export { axiosInstance  }
