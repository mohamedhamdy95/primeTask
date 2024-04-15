import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    TableModule,
    CardModule,
    SplitButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'primeTask';
  
  products:any[]=[
    {
      id: '1',
      code: 'ds226dsds',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 30,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
  {
    id: '2',
    code: 'f230fh0g3',
    name: 'Smart Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
  {
    id: '3',
    code: 'fghf66',
    name: 'test',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 60,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
  {
    id: '4',
    code: 'fghf66',
    name: 'test',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 60,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
  {
    id: '5',
    code: 'fghf66',
    name: 'test',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 60,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
  {
    id: '6',
    code: 'sdfgdf6',
    name: 'Bamboo ',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 16,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
  ];
}
