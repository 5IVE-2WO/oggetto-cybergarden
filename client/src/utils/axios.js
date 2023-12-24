import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8080',
    headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth'))?.token ?? ''}`}
})

export default instance