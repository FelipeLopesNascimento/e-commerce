import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProductsService } from '../../services/data-products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoria: string | null = null;
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private route: ActivatedRoute, private dataProductsService: DataProductsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria');
      this.loadProducts();
    });
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
