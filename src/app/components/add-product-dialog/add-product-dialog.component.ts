import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Goods } from 'src/app/modules/Goods';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent  {
product: Goods = new Goods();


  constructor(protected ref: NbDialogRef<AddProductDialogComponent>) { }


  addProduct() {

    console.log('Product added', this.product);
    this.ref.close(this.product)
  }

  cancel() {
    this.ref.close();
  }


}
