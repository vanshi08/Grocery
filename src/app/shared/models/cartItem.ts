import { Groceries } from "./grocery";

export class CartItem {

    constructor(grocery:Groceries) {
        this.grocery=grocery;
    }

    grocery:Groceries;
    quantity:number=1;
    get price(): number {
        return this.grocery.price * this.quantity;
    }
}