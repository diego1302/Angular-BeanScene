import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product, Products } from '../product-Types';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-product-screen',
  templateUrl: './product-screen.component.html',
  styleUrl: './product-screen.component.scss'
})
export class ProductScreenComponent implements OnInit, OnDestroy {

  private _subscription: Subscription;
  baseUrl = "https://dummyjson.com";
  productsUrl = "/products"
  categoriesUrl = "/products/categories"


  //variables to be used
  products: Product[];
  errorMessage: string | null = null;
  categories: string[];

  constructor(private http: HttpClient){
    this._subscription = new Subscription();
    this.products = [];
    this.categories = [];
  }


  ngOnInit(): void {
    this.fecthProductsDataAPI();
    this.fecthProductCategoriesAPI();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  fecthProductsDataAPI():void {
    this._subscription.add(
      this.http.get<Products>(this.baseUrl.concat(this.productsUrl)).subscribe({
        next: (data)=>{
          this.products = data.products;
          // console.warn('products list', data);
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.warn('error', error)
        },
        complete:()=>{}
      })
    )
  }

  fecthProductCategoriesAPI():void {
    this._subscription.add(
      this.http.get<string[]>(this.baseUrl.concat(this.categoriesUrl)).subscribe({
        next: (data)=>{
          this.categories = data;
          console.log(this.categories)
        },
        error: (error) => {
          console.warn('error', error)
        },
        complete:()=>{}
      })
    )
  }


  

  

}
