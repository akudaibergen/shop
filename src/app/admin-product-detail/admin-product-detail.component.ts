import { Prodaction } from './../../models';
import { ApiService } from './../api.service';
import { Location } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Product } from './../../Shop';
import { Category_productService } from './../category_product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {

  products: Product[] = [];
  product: Prodaction;

  constructor(
    private category_productService: Category_productService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getProduct();
    this.getProducts();
  }


  getProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getProductItem(id).subscribe(product => this.product = product);
  }
  getProducts():void{
    this.category_productService.getProducts().subscribe(products => this.products = products);
  }

  goBack(){
    this.location.back();
  }


  save(name:string, price: number, description: string, color: Array<string>):void{
    this.product.name = name;
    this.product.price = price;
    this.product.description = description;
    this.product.color = color;
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.saveProductChange(this.product, id).subscribe(product => this.product = product);
  }

  deleteProduct(product: Product):void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.deleteProduct(id).subscribe();
    window.alert('Product is deleted');
    this.location.back();
  }
}
