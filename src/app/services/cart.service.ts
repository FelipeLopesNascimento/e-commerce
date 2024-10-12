import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);

  constructor() {
    const storedItems = localStorage.getItem('cartItems');
    this.cartItems = storedItems ? JSON.parse(storedItems) : [];
    this.cartItemsSubject.next(this.cartItems);
  }

  addToCart(product: any): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateCartStorage();
  }

  private updateCartStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartItemsSubject.next(this.cartItems);
  }

  getCartItems() {
    return this.cartItemsSubject.asObservable(); // Retorna um Observable dos itens do carrinho
  }

  removeItem(product: any): void {
    this.cartItems = this.cartItems.filter(item => item !== product);
    this.cartItemsSubject.next(this.cartItems); // Emite a nova lista para os observadores
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems); // Emite a nova lista para os observadores
  }

  increaseFromCart(product: any): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  }
  this.updateCartStorage();
  }

  decreaseFromCart(product: any): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
  if (existingProduct && existingProduct.quantity > 1) {
    existingProduct.quantity--;
  } else if (existingProduct) {
    this.removeItem(existingProduct);
  }
  this.updateCartStorage();
  }


  getTotalPrice(): number {
    console.log(this.cartItems); // Veja se os itens estão corretos
    return this.cartItems.reduce((total, item) => {
      console.log(item.preco, item.quantity); // Verifique os valores
      return total + (item.preco * item.quantity);
    }, 0);
  }
}
