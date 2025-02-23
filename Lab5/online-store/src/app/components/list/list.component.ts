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
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/hca/68203271323678.jpg?format=gallery-medium',
        name: 'Linkin Park - Hybrid Theory',
        description: 'Пластинка Linkin Park - Hybrid Theory',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/linkin-park---hybrid-theory-108571484/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/h74/84437656403998.jpg?format=gallery-medium',
        name: 'Linkin Park - Meteora',
        description: 'Пластинка Linkin Park - Meteora',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/linkin-park-meteora-114310442/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pff/p0f/25487578.jpg?format=gallery-medium',
        name: 'Linkin Park - From Zero (Translucent Petrol Blue)',
        description: 'Пластинка Linkin Park - From Zero (Translucent Petrol Blue)',
        rating: 0.0,
        link: 'https://kaspi.kz/shop/p/linkin-park---from-zero-translucent-petrol-blue--134896098/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/hc8/86377393750046.jpg?format=gallery-medium',
        name: 'LINKIN PARK - MINUTES TO MIDNIGHT',
        description: 'Пластинка LINKIN PARK - MINUTES TO MIDNIGHT',
        rating: 0.0,
        link: 'https://kaspi.kz/shop/p/linkin-park---minutes-to-midnight-120790785/?c=750000000',
        likes: 0
      },
    ],
    'Pop': [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h86/86281858449438.png?format=gallery-medium',
        name: 'Twenty One Pilots - Clancy',
        description: 'Пластинка Twenty One Pilots - Clancy',
        rating: 5.0,
        link: 'https://kaspi.kz/shop/p/twenty-one-pilots---clancy-120421710/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hdc/h39/86106773979166.jpg?format=gallery-medium',
        name: 'LINKIN PARK - ONE MORE LIGHT',
        description: 'Пластинка LINKIN PARK - ONE MORE LIGHT',
        rating: 0.0,
        link: 'https://kaspi.kz/shop/p/linkin-park---one-more-light-119779977/?c=750000000',
        likes: 0
      },
    ],
    'Jazz': [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/h42/86377648488478.jpg?format=gallery-medium',
        name: 'LINKIN PARK - PAPERCUTS',
        description: 'Пластинка LINKIN PARK - PAPERCUTS',
        rating: 0.0,
        link: 'https://kaspi.kz/shop/p/linkin-park---papercuts--120791652/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h89/86351375499294.jpg?format=gallery-medium',
        name: 'LINKIN PARK - Singles Collection 2000 - 2023',
        description: 'Пластинка LINKIN PARK - Singles Collection 2000 - 2023',
        rating: 0.0,
        link: 'https://kaspi.kz/shop/p/linkin-park---singles-collection-2000---2023-120696135/?c=750000000',
        likes: 0
      },
    ],
    'Classical': [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h43/85426582257694.jpg?format=gallery-medium',
        name: 'Linkin Park - Lost Demos',
        description: 'Пластинка Linkin Park - Lost Demos',
        rating: 0.0,
        link: 'https://kaspi.kz/shop/p/linkin-park---lost-demos-117410692/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pcb/p79/25487678.jpg?format=gallery-medium',
        name: 'Linkin Park From Zero (Translucent Magenta)',
        description: 'Пластинка Linkin Park - From Zero (Translucent Magenta)',
        rating: 0.0,
        link: 'https://kaspi.kz/shop/p/linkin-park-from-zero-translucent-magenta--134896126/?c=750000000',
        likes: 0
      },
    ]
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