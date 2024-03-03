import { Component } from '@angular/core';
import { CardProductComponent } from "../../Components/Cards/card-product/card-product.component";

@Component({
    selector: 'app-store',
    standalone: true,
    templateUrl: './store.component.html',
    styleUrl: './store.component.css',
    imports: [CardProductComponent]
})
export class StoreComponent {

}
