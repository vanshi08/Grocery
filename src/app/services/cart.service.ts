import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
import { Groceries } from '../shared/models/grocery';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(grocery:Groceries): void{
    let cartItem = this.cart.items.find(item => item.grocery.id === grocery.id)
    if(cartItem) {
      this.changeQuantity(grocery.id, cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new CartItem(grocery));
  }

  removeFromCart(groceryId:number):void {
    this.cart.items = this.cart.items.filter(item => item.grocery.id!=groceryId)
  }
  changeQuantity(quantity:number, groceryId:number) {
    let cartItem = this.cart.items.find(item => item.grocery.id === groceryId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart
  }
}
