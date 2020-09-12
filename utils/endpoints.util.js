import config from '../config'
import uris from './../constants/api.uri'

export default {

    login: () => {
        return config.apiBaseUrl + uris.LOGIN_URI
    }
} 