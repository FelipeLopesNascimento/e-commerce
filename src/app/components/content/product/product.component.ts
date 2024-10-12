import { Component, OnInit } from '@angular/core';
import { DataProductsService } from '../../../services/data-products.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: any[] = [];

  constructor(private dataProductsService: DataProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.dataProductsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

}
