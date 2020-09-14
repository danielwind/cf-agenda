import apiService from './api.service'
import storageService from './storage.service'
import endpoints from '../utils/endpoints.util'

export default {

    login: async (payload) => {

        //invoke login api
        const response = await apiService.post(endpoints.login(), payload)
        if(response.error) { return { status: false, message: response.error } }
        
        //store data in async storage
        const storeStatus = await storageService.store('ORDERS', response.data);
        if(!storeStatus) { return { status: false, message: 'Unable to store data in Phone.' }}

        return {status: true, message: ''}
    },

    active: () => {},

    logout: () => {}
}