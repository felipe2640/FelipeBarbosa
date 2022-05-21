import axios from 'axios'
import { type } from 'os'

const URL:any  =  import.meta.env.VITE_API_URL

export const api = axios.create({baseURL:(URL)})
