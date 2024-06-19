import { Router } from '@angular/router';
import { Component} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }


  onRegister(): void {
    this.authService.register(this.username, this.password).subscribe({
      next: (response) => {
        alert('Пользователь успешно зарегистрирован!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert('пользователь с таким логином уже существует');
      }
    });
  }



}
