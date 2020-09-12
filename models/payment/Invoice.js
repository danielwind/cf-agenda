export default class Invoice {
    constructor(discounts, subtotal, vat, delivery, total){
        this.discounts  = discounts;
        this.subtotal   = subtotal;
        this.vat        = vat;
        this.delivery   = delivery;
        this.total      = total;
    }
}