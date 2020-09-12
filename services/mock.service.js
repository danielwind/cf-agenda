import ordersJson from './../data/orders.json'
import productsJson from './../data/products.json'
import uris from './../constants/api.uri'

export default {

    intercept: (url) => {
        if(url.includes(uris.LOGIN_URI) || url.includes(uris.GET_ORDERS_URI)) {
            return { error: null, data: ordersJson }
        } else if(url.includes(uris.GET_PRODUCTS_URI)){
            return { error: null, data: productsJson }
        }
    },

    getOrders: () => {
        return ordersJson
    },

    getProducts: () => {
        return productsJson
    }
}