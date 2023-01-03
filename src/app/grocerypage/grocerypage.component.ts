import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { GroceryService } from '../services/grocery/grocery.service';
import { Groceries } from '../shared/models/grocery';

@Component({
  selector: 'app-grocerypage',
  templateUrl: './grocerypage.component.html',
  styleUrls: ['./grocerypage.component.css']
})
export class GrocerypageComponent implements OnInit{
  
  grocery!:Groceries;
  constructor(private activatedRoute:ActivatedRoute, private groceryService:GroceryService,
    private cartService: CartService, private router:Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.grocery = groceryService.getGroceryById(params['id'])
    })
  }
  ngOnInit(): void {
  }
  addToCart() {
    this.cartService.addToCart(this.grocery);
    this.router.navigateByUrl('/cart-page')
  }
} 
