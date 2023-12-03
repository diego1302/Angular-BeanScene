import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products, Product } from '../product-Types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit, OnDestroy  {

  private _subscription: Subscription;

  products: Product[];

  baseUrl = "https://dummyjson.com";
  productsUrl = "/products"

  constructor(private http: HttpClient) {
    this._subscription= new Subscription();
    this.products = [];
  }

  ngOnInit(): void {
    this.fetchProductDataInit();
  }

  ngOnDestroy(): void {

  }

  fetchProductDataInit(): void {
    
    this._subscription.add(
      this.http.get<Products>(this.baseUrl.concat(this.productsUrl)).subscribe({
        next: (data) => {
          // Means success
          
          this.products = data.products;
          // console.warn('productData', data);
        },
        error: (error) => {
          // Means error
          console.warn('error', error)
        },
        complete: () => {}
      })
    );
  }

  

}
