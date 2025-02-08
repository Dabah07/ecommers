const { default: axios } = require("axios");

const isServer = typeof window == 'undefined'

const token = !isServer && localStorage.getItem('token')

const Port = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Authorization: token ? `Bearer ${token}` : null
    }
})

export default Port