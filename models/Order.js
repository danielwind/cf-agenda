import { v4 as uuidv4 } from "uuid";

export default class Order {

    constructor(_id, orderno, headline, items, customer, packaging, shipping, payment, reminders){
        this._id      = _id ? _id : uuidv4();
        this.orderno = orderno;
        this.status   = 'PENDING';
        this.headline = headline;
        this.items    = items;
        this.customer = customer;
        this.packaging = packaging;
        this.shipping = shipping;
        this.payment  = payment;
        this.gallery = [];
        this.reminders = reminders;
    }

    static from(json){
        return new Order({json});
    }
}