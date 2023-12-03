import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit,OnDestroy {

  @Input() category: string = "";
  @Output() categoryFromChildEvent: EventEmitter<string> = new EventEmitter<string>();

  private _subscriptions: Subscription
  baseUrl = "https://dummyjson.com";
  categoriesUrl = "/products/categories"

  categories: string[];
  
  constructor(private http: HttpClient) {
    this._subscriptions= new Subscription();
    this.categories = [];
  }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }

  

  categoryReceiveParentEvent($event: string): void {
    this.category = $event;    
  }

}
