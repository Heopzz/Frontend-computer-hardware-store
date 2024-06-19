import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../modules/CartItem';
import { HttpClient } from '@angular/common/http';
import { Order } from '../modules/Order';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItem: CartItem[] = [];
  private cart = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cart.asObservable();

  private apiUrl = '/api/orders';

  addToCart(item: CartItem): void {
    const existingItem = this.cartItem.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity
    } else {
      this.cartItem.push(item);
    }
    this.cart.next(this.cartItem);
  }

  getCartItems(): CartItem[] {
    return this.cartItem;
  }

  removeFromCart(itemId: number | null): void {
    this.cartItem = this.cartItem.filter(item => item.id != itemId);
    this.cart.next(this.cartItem);


  }

  clearCart(): void {
    this.cartItem = [];
    this.cart.next(this.cartItem)
  }

  constructor(private http: HttpClient) { }

  placeOrder(userId: number): Observable<Order> {
    const orderItems = this.cartItem.map(item => ({
      goodsId: item.id!,
      quantity: item.quantity,
      price: item.price
    }));
    const order = new Order(null, userId, orderItems, this.getTotal());

    return this.http.post<Order>(`${this.apiUrl}/create/${userId}`, order)
  }

  private getTotal(): number {
    return this.cartItem.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  updateQuantity(item: CartItem, quantity: number): void {
    const cartItem = this.cartItem.find(cartItem => cartItem.id === item.id);
    if (cartItem) {
      cartItem.quantity = quantity;
      this.cart.next(this.cartItem);
    }
  }
}
