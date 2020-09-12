import axios from 'axios'
import config from './../config'
import mockService from './mock.service'

export default {

    post: async(url, payload) => {
        if(config.mock) { return mockService.intercept(url) }

        try {
            const response = await axios.post(url, payload)
            return { error: null, data: response.data }
        } catch (e) {
            console.error(`Error while posting data to the server. Error: ${e.stack}`)
            return { error: e.message, data: null };
        }
    },

    get: async (url) => {
        if(config) { }

        try {
            const response = await axios.get(url)
            return { error: null, data: response.data }
        } catch (e) {
            console.error(`Error while retrieving data from server. Error: ${e.stack}`)
            return { error: e.message, data: null }
        }
    }
}