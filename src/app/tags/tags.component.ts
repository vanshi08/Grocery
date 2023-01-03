import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../services/grocery/grocery.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags:Tag[] = [];
  
  constructor(private gs:GroceryService) { }

  ngOnInit(): void {
      this.tags = this.gs.getAllTag();
  }
}
