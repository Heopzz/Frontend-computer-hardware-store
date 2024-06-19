import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { CartItem } from 'src/app/modules/CartItem';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [CurrencyPipe]
})
export class CartComponent implements OnInit {
  cartItem: CartItem[] = [];
  @ViewChild('dialog') dialogTamplate!: TemplateRef<any>;
  userId!: number;
  currencyPipe: any;

  constructor(private cartService: CartService, private dialogService: NbDialogService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    this.userId = currentUser.id;
    this.cartService.cart$.subscribe(items => {
      this.cartItem = items;
    });
  }


  getTotal(): number {
    return this.cartItem.reduce((total, item) => total + item.price * item.quantity, 0);

  }

  getTotalFormatted(): string {
    const total =this.getTotal();
    return this.currencyPipe.transform(total, 'RUB', 'symbol', '1.2-2') || '0 руб';
  }


  removeItem(itemId: number | null): void {
    this.cartService.removeFromCart(itemId);
  }
  clearCart(): void {
    this.cartService.clearCart();
  }
  placeOrder(): void {
    if (this.cartItem.length === 0) {
      alert('Корзина пуста. Пожалуйста, добавьте товары перед оформлением заказа.')
      return;
    }
    this.cartService.placeOrder(this.userId).subscribe(order => {
     const dialog = this.dialogService.open(this.dialogTamplate, {
        context: { orderId: order.id },
        hasBackdrop: true,
        closeOnBackdropClick: true,
      });
      this.clearCart();
    });
  }

  goToHome(): void {
    this.router.navigate(['/goods'])
}

updateQuantity(item: CartItem): void {
  if (item.quantity < 1) {
    item.quantity = 1;
  }
  this.cartService.updateQuantity(item, item.quantity);
}

increaseQuantity(item: CartItem): void {
  this.cartService.updateQuantity(item, item.quantity + 1);
}

decreaseQuantity(item: CartItem): void {
  if (item.quantity > 1) {
    this.cartService.updateQuantity(item, item.quantity - 1);
  }
}
}
