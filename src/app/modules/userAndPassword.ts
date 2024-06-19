import { User } from "./user";


export class UserAndPassword {
  user: User;
  password: string;



  constructor(user: User, password: string) {
    this.user = user;
    this.password = password;

  }
}
