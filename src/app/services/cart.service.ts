import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);

  constructor() {}

  getCartItems() {
    return this.cartItemsSubject.asObservable(); // Retorna um Observable dos itens do carrinho
  }

  addToCart(product: any): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next(this.cartItems); // Emite a nova lista para os observadores
    console.log('Carrinho Atual:', this.cartItems);
  }

  removeItem(product: any): void {
    this.cartItems = this.cartItems.filter(item => item !== product);
    this.cartItemsSubject.next(this.cartItems); // Emite a nova lista para os observadores
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems); // Emite a nova lista para os observadores
  }
}
