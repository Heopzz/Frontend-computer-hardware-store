import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { User } from 'src/app/modules/user';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
user: User;


  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
    this.user.username = "admin";
    this.user.password = "admin";
   }





  ngOnInit() {
    if (localStorage.getItem("isLoggedIn")) {
      this.router.navigate(["goods"])
    }
  }


  login() {

    this.authService.login(this.user.username,this.user.password).subscribe(
      data => {
        if (data) {
          const role = localStorage.getItem('Role');
          if (role === 'ADMIN') {
            this.router.navigate(['admin'])
          } else {
          this.router.navigate(["goods"])
          }
        }
      }
    )
  }

  register(): void {
    this.router.navigate(['register'])

  }

}
