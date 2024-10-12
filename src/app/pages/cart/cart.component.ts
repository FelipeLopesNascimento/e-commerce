import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}



  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      console.log('Itens no carrinho:', this.cartItems);
      this.getTotalPrice();
      console.log(this.getTotalPrice())
      });

  }

   removeFromCart(item: any): void {
    this.cartService.removeItem(item);
  }

  increaseFromCart(item: any): void {
    this.cartService.increaseFromCart(item);
  }

  decreaseFromCart(item: any): void {
    this.cartService.decreaseFromCart(item);
  }

  getTotalPrice(): number {
    console.log(this.cartItems); // Veja se os itens estão corretos
    return this.cartItems.reduce((total, item) => {
      console.log(item.preco, item.quantity); // Verifique os valores
      return total + (item.preco * item.quantity);
    }, 0);
  }

  checkout(): void {
    alert('Checkout realizado com sucesso!');
  }
}
