import axios from "axios";



const apiUrl = 'https://public-api.tracker.gg/v2/csgo/standard'
const apiKey = "1f864248-e382-45fc-a601-9ff8dcdfdbf4"

const api = axios.create({
    headers: {
        "TRN-Api-Key": apiKey,
    },
    baseURL: apiUrl
})

export default api;