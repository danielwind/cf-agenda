import storageService from './storage.service'

export default {

    getAll: () => {

    },

    get: async (id) => {
        const orders = await storageService.get('ORDERS')
        if(!orders || orders.length === 0) { return null }
        const order = orders.find(order => order._id === id)
        console.log(`ss order: ${JSON.stringify(order)}`);
        return order
    },

    getByIds: (ids) => {

    },

    create: (order) => {

    },

    update: (order) => {

    },
    
    remove: (id) => {

    }
}