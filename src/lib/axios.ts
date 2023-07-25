import { Config } from '@/constants'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: Config.API_URL
})

export default axios
