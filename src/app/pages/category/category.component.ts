import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProductsService } from '../../services/data-products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoria: string | null = null;
  products: any[] = [];
  product: any[] = [];
  filteredProducts: any[] = [];
  cartItems: any[] = [];

  constructor(private route: ActivatedRoute, private dataProductsService: DataProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria');
      this.loadProducts();
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  loadProducts(): void {
    this.dataProductsService.getProducts().subscribe(data => {
      this.products = data;
      this.filterProductsByCategory();
    });
  }

  filterProductsByCategory(): void {
    if (this.categoria) {
      this.filteredProducts = this.products.filter(product => product.categoria === this.categoria);
    }
  }
}
