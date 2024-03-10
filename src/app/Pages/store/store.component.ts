import { Component } from '@angular/core';
import { CardProductComponent } from '../../Components/Cards/card-product/card-product.component';
import { ProductsComponent } from '../../Components/Boards/products/products.component';

@Component({
  selector: 'app-store',
  standalone: true,
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
  imports: [ProductsComponent],
})
export class StoreComponent {}
