import { Injectable } from '@angular/core';
import { Groceries } from 'src/app/shared/models/grocery';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor() { }
  
  getAllGroceryByTag(tag:string) :Groceries[] {
    if(tag=='All')
      return this.getAll()
    else
      return this.getAll().filter(grocery => grocery.tags?.includes(tag));
  }

  getGroceryById(id:number): Groceries {
    return this.getAll().find(grocery => grocery.id == id)!;
  }

  getAllTag():Tag[] {
    return [
      {name: 'All', count:15},
      {name: 'Fruits', count:3},
      {name: 'Vegetables', count:1}
    ];
  }
  
  getAll():Groceries[] {
    return [
      {
        id:1,
        name:'Fruits',
        price:10,
        favorite: false,
        imageUrl: 'assets/fruits-1.jpg',
        tags:['Fruits']
      },
      {
        id:2,
        name:'Vegetables',
        price:10,
        favorite: true,
        imageUrl: 'assets/home-1.jpg',
        tags:['Vegetables']
      },
      {
        id:3,
        name:'Beauty Products',
        price:10,
        favorite: false,
        imageUrl: '/assets/beauty-1.jpg',
        tags:['skin, hair']
      },
      {
        id:4,
        name:'Munchies and Biscuits',
        price:10,
        favorite: false,
        imageUrl: '/assets/munchies-1.jpg',
        tags:['munchies, cookies']
      },
      {
        id:5,
        name:'Coffee and more',
        price:10,
        favorite: false,
        imageUrl: '/assets/coffee-1.jpg'
      },
      {
        id:6,
        name:'Chocolates and Desserts',
        price:10,
        favorite: false,
        imageUrl: '/assets/chocolate-1.jpg'
      },
      {
        id:7,
        name:'Cleaning Essentials',
        price:10,
        favorite: false,
        imageUrl: '/assets/cleaning-1.jpg'
      },
      {
        id:8,
        name:'Dry fruits, Oils and Masalas',
        price:10,
        favorite: false,
        imageUrl: '/assets/dry-fruits-1.jpg'
      },
      {
        id:9,
        name:'Dairy, Bread and Eggs',
        price:10,
        favorite: false,
        imageUrl: '/assets/dairy-1.jpg'
      },
      {
        id:10,
        name:'Hygience and Grooming',
        price:10,
        favorite: false,
        imageUrl: '/assets/hygiene-1.jpg'
      },
      {
        id:11,
        name:'Instant food',
        price:10,
        favorite: false,
        imageUrl: '/assets/instant-1.jpg'
      },
      {
        id:12,
        name:'Soft drinks and Juices',
        price:10,
        favorite: false,
        imageUrl: '/assets/soft-drinks-1.jpg'
      },
      {
        id:13,
        name:'Meat',
        price:10,
        favorite: false,
        imageUrl: '/assets/meat-1.jpg'
      },
      {
        id:14,
        name:'Pet Care',
        price:10,
        favorite: false,
        imageUrl: '/assets/pet-care-1.jpg'
      },
      {
        id:15,
        name:'Bakery',
        price:10,
        favorite: false,
        imageUrl: '/assets/bakery-1.jpg'
      },
      {
        id:16,
        name:'Rice, Atta and Dals',
        price:10,
        favorite: false,
        imageUrl: '/assets/rice-1.jpg'
      }
    ];
  }
}
