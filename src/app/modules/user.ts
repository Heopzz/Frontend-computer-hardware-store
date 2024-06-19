import { RoleEnum } from "./RoleEnum.enum";

export class User {

  id: number;
  username: string;
  role: RoleEnum;
  password: string;
  isEnabled: boolean;


  constructor() {
    this.id = 0;
    this.username = "";
    this.role = RoleEnum.USER;
    this.password = "";
    this.isEnabled = true
  }
}
