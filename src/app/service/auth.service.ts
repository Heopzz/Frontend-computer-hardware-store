import { User } from './../modules/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserAndPassword } from '../modules/userAndPassword';
import { RoleEnum } from '../modules/RoleEnum.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  private loginUrl = '/api';


  private authData (username: string, password: string) {
    return window.btoa(username + ":" + password)
  }

login(username: string, password: string){
  let myHeaders = new HttpHeaders().set('authorization', `Basic ${this.authData(username, password)}`);
  return this.http.post<any>(`${this.loginUrl}/login`,"",
    {headers: myHeaders})
  .pipe(
    map(user =>{

      if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("Userid", user.details.id);
        localStorage.setItem("Username", user.details.username);
        localStorage.setItem("Role", user.details.role);
      }
      return user;
    })
  );
}

getCurrentUser(): User {
  if (localStorage.getItem('Role') == 'user') {
    const user: User = {
      id: +localStorage.getItem('Userid')!,
      username: localStorage.getItem('Username')!,
      role: RoleEnum.USER,
      password: '',
      isEnabled: true
    };
    return user;
  }
  else {
    const user: User = {
      id: +localStorage.getItem('Userid')!,
      username: localStorage.getItem('Username')!,
      role: RoleEnum.ADMIN,
      password: '',
      isEnabled: true
  };
  return user;
}
  // const user: User = {
  //   id: +localStorage.getItem('Userid')!,
  //   username: localStorage.getItem('Username')!,
  //   role: localStorage.getItem('Role')!,
  //   password: '',
  //   isEnabled: true
  // };

}

register(username: string, password: string): Observable<any> {
  // const user = {username, password};
  const user: User = new User();
  user.password = this.authData(username, password);
  user.username = username;
  const userAndPassword: UserAndPassword = new UserAndPassword(user, password);
  return this.http.post(`${this.loginUrl}/register`, userAndPassword)
}

logout(){
  let myHeaders = new HttpHeaders().set('content-type','application/json');
  return this.http.post<any>(`${this.loginUrl}/logout`, null,
  {headers: myHeaders}).pipe();
}


checkLogin(){
  return this.http.get<boolean>(`${this.loginUrl}/checkLogin`).pipe();
}

IsAdmin(): boolean {
  return localStorage.getItem("Role") === "ADMIN";
}



}
