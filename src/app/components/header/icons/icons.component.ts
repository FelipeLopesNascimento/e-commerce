import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.css'
})
export class IconsComponent implements OnInit {
  totalPrice: number = 0;

  constructor(private cartService: CartService)
  {


  }



  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.totalPrice = this.cartService.getTotalPrice();
    });

  }



}
