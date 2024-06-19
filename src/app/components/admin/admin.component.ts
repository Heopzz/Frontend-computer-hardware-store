import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/service/auth.service';
import { GoodsService } from 'src/app/service/goods.service';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';
import { Goods } from 'src/app/modules/Goods';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor( public authService: AuthService,
    private router: Router,
    private dialogService: NbDialogService,
    private goodsService: GoodsService,) { }
    goodsList: Goods[] = [];
    originalGoodsList: any[] = [];

  ngOnInit(): void {
    this.loadGoods();

  }

  loadGoods(): void {
    this.goodsService.getAllGoods().subscribe(data => {
      this.goodsList = data
      this.originalGoodsList = [...data];
    })
  }


  onAddProduct(){
    this.dialogService.open(AddProductDialogComponent)
    .onClose.subscribe((product: Goods) => {
      if (product) {
        console.log('Product to be added', product)
        this.goodsService.createGoods(product).subscribe({
          next: (response) => {
            console.log('Product added successifully', response)
          }
        })
      }
    })
  }

  logout() {
    this.authService.logout().subscribe(
      () => {
        localStorage.clear();
        this.router.navigate(['/login'])
      }
    )
  }

  deleteGoods(id: number | null): void {
    this.goodsService.deleteGoods(id).subscribe(() => {
      this.goodsList = this.goodsList.filter(g => g.id !== id);
    })
  }

}
