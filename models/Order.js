import { v4 as uuidv4 } from "uuid";

export default class Order {

    constructor(_id, headline, items, customer, shipping, payment, reminders){
        this._id      = _id ? _id : uuidv4();
        this.status   = 'PENDING';
        this.headline = headline;
        this.items    = items;
        this.customer = customer;
        this.shipping = shipping;
        this.payment  = payment;
        this.showcase = [];
        this.reminders = reminders;
    }

    static from(json){
        return new Order({json});
    }
}