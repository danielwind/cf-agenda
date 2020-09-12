export default class Item {
    constructor(productId, quantity, flavor, design, notes, references){
        this.productId  = productId;
        this.quantity   = quantity;
        this.flavor     = flavor;
        this.design     = design;
        this.notes      = notes;
        this.references = references;
    }
}