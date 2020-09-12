import { v4 as uuidv4 } from "uuid";

export default class Deposit {
    constructor(imageUrl, status, date){
        this._id      = uuidv4();
        this.imageUrl = imageUrl;
        this.status   = status;
        this.date     = date;
    }
}