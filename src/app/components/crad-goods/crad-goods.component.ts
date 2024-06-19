import { CartItem } from 'src/app/modules/CartItem';
import { GoodsService } from './../../service/goods.service';
import { Component, OnInit } from '@angular/core';
import { Goods } from 'src/app/modules/Goods';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-crad-goods',
  templateUrl: './crad-goods.component.html',
  styleUrls: ['./crad-goods.component.scss']
})
export class CradGoodsComponent implements OnInit {

  goodsList: Goods[] = [];
  searchQuery: string = '';
  originalGoodsList: any[] = [];
  isAdmin: boolean = false;


  constructor(private goodsService: GoodsService, private authService: AuthService, private cartService: CartService ) { }


  loadGoods(): void {
    this.goodsService.getAllGoods().subscribe(data => {
      this.goodsList = data
      this.originalGoodsList = [...data];
    })
  }

  ngOnInit(): void {
    this.loadGoods();
  }

  searchGoods(): void {
    if (this.searchQuery.trim()) {
      this.goodsService.searchGoods(this.searchQuery).subscribe(data => {
        this.goodsList = data;
      });


    }
    else{
      this.loadGoods();
  }
  }

  onSortChange(sortOption: string): void {
    if(sortOption === '') {
      this.goodsList = [...this.originalGoodsList];
    } else if (sortOption === '2') {
      this.goodsList.sort((a, b) => a.price - b.price);
    } else if (sortOption === '1') {
      this.goodsList.sort((a, b) => b.price - a.price);
    }
  }

  addToCart(goodsList: Goods): void {
    const cartItem: CartItem ={
      id: goodsList.id,
      name: goodsList.name,
      price: goodsList.price,
      quantity: 1,
      imageUrl: goodsList.imageUrl
    };
    this.cartService.addToCart(cartItem);
  }


}
