import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AlbumsComponent {
  albums = [
    { id: 1, title: 'Album 1' },
    { id: 2, title: 'Album 2' },
    { id: 3, title: 'Album 3' }
  ];
}