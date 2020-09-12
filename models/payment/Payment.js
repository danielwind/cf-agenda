export default class Payment {

    constructor(deposits, invoice, chargeTaxes){
        this.deposits    = deposits;
        this.invoice     = invoice;
        this.chargeTaxes = chargeTaxes;
    }
}