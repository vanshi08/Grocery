import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery/grocery.service';
import { Groceries } from '../shared/models/grocery';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  groceries:Groceries[]= [];
  constructor(private gs:GroceryService, private router:ActivatedRoute) { }
  
  ngOnInit(): void {

    this.router.params.subscribe(params=> {
      if(params['searchItem'])
        this.groceries=this.gs.getAll().filter(grocery => grocery.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
        this.groceries=this.gs.getAllGroceryByTag(params['tag'])
      
      else
        this.groceries= this.gs.getAll(); 
      })
  }
}
