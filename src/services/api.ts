import axios from "axios";

const apiUrl = 'https://rickandmortyapi.com/api'

const api = axios.create({
    baseURL: apiUrl
})

export default api;