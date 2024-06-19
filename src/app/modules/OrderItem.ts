export class OrderItem {
  constructor(
    public id: number | null,
    public goodsId: number,
    public quantity: number,
    public price: number
  ) {}
}

