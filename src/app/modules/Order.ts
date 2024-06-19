import { CartItem } from "./CartItem";

export class Order {
  constructor(
    public id: number | null | undefined, // Добавляем id
    public userId: number,
    public items: {goodsId: number, quantity: number, price: number}[],  // Товары и их количество
    public total: number
  ) {}
}


