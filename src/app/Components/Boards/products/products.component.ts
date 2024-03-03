import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
products: { id: number; nameProduct: string, description: string, dimensions: string, stock:string, nationality: string, maker: string,status:boolean }[] = [
    { id: 1, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 2, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 3, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status: false },
    { id: 4, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 5, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 6, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 7, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status: false },
    { id: 8, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 9, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 10, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 11, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 12, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status: false },
    { id: 13, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 14, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
    { id: 15, nameProduct: 'Nombre del producto', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, at.", dimensions: "HighxWidth", stock:"100", nationality: "Colombiano", maker: "arte noGka",status:true },
  ];
}
