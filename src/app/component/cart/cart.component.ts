import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

interface products {
  id: number;
  title: string;
  image: any;
  description: string;
  price: number | string;
  quantity: string;
  total: string;
  action: any;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;

  displayedColumns: string[] = [
    'id',
    'title',
    'image',
    'description',
    'price',
    'quantity',
    'total',
    'action',
  ];
  dataSource = this.products;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(element: any) {
    this.cartService.removeCartItem(element);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }
}
