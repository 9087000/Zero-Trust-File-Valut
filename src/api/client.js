import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:8080/api'
})

// attach token + device id
api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`

  let did = localStorage.getItem('deviceId')
  if (!did) { did = crypto.randomUUID(); localStorage.setItem('deviceId', did) }
  cfg.headers['X-Device-ID'] = did
  return cfg
})

// 401 handler hook (optional)
let on401 = null
export const setOn401Handler = fn => { on401 = fn }
api.interceptors.response.use(r => r, err => {
  if (err.response && err.response.status === 401 && on401) on401()
  return Promise.reject(err)
})

export default api   // <-- IMPORTANT: default export
