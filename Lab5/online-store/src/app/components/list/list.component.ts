import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from '../items/items.component';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  likes: number;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemsComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() category!: string;

  products: Record<string, Product[]> = {
    'Rock': [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/hb2/68003101474846.jpg?format=gallery-medium',
        name: 'Twenty One Pilots - Trench',
        description: 'Пластинка Twenty One Pilots - Trench',
        rating: 4.5,
        link: 'https://kaspi.kz/shop/p/twenty-one-pilots---trench-108493115',
        likes: 0
      },
      // More products...
    ],
    'Pop': [],
    'Jazz': [],
    'Classical': []
  };

  removeProduct(product: Product) {
    if (this.category in this.products) {
      this.products[this.category] = this.products[this.category].filter(p => p !== product);
    }
  }

  increaseLikes(product: Product) {
    product.likes++;
  }
}