import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  subscription: Subscription = Subscription.EMPTY; 

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      console.log('Itens no carrinho:', this.cartItems);
    });
  }

  ngOnDestroy(): void {
    // Certifique-se de cancelar a inscrição para evitar memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  removeFromCart(item: any): void {
    this.cartService.removeItem(item);
  }

  checkout(): void {
    alert('Checkout realizado com sucesso!');
  }
}
