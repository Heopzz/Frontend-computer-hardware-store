import { Router} from '@angular/router';
import { Component, OnInit, } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { GoodsService } from 'src/app/service/goods.service';
import { NbDialogService } from '@nebular/theme';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;
  itemCount: number = 0;


  constructor( public authService: AuthService,
    private router: Router,
    private dialogService: NbDialogService,
    private goodsService: GoodsService,
    private cartService: CartService,

  ) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.itemCount = items.reduce((total, item) => total + item.quantity, 0);
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

  goToCart(): void {
    this.router.navigate(['/cart'])
  }


  goToHome(): void {
    this.router.navigate(['/goods'])
}


}
