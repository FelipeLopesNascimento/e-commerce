import { Component, OnInit } from '@angular/core';
import { DataProductsService } from '../../services/data-products.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private dataProductsService: DataProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); // Obtenha o ID da rota
    if (productId) { // Verifique se productId não é null
      this.dataProductsService.getProductById(productId).subscribe(product => {
        this.product = product; // Armazene o produto buscado
      });
    } else {
      console.error('Product ID not found in route.');
    }
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

}
