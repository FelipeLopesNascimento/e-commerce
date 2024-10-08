import { Component, OnInit } from '@angular/core';
import { DataProductsService } from '../../../services/data-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products: any[] = [];

  constructor(private dataProductsService: DataProductsService) { }

  ngOnInit(): void {
    this.dataProductsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
