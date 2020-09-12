import { AsyncStorage } from 'react-native';

export default {

    get: async (key) => {
        return JSON.parse(await AsyncStorage.getItem(key));
    },

    store: async (key, value) => {
        try{
            await AsyncStorage.setItem(key, JSON.stringify(value));
        }catch(e){
            console.error(`storageService.store() | Unable to store in local data. Error: ${e.stack}`);
            return false;
        }
        return true;
    }
}