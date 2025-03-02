import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // ✅ Required for [(ngModel)]

@Component({
  standalone: true,
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  imports: [CommonModule, RouterModule, FormsModule] // ✅ Ensure FormsModule is included
})
export class AlbumDetailComponent {
  newTitle: string = ''; // ✅ This fixes the error!
}