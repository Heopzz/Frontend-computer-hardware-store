export class CartItem {
  id: number | null;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;

  constructor() {
    this.id = 0,
    this.name = "",
    this.price = 0,
    this.quantity = 0,
    this.imageUrl = ""

  }
}
