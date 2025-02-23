export const categories = [
  { id: 1, name: 'Rock' },
  { id: 2, name: 'Pop' },
  { id: 3, name: 'Jazz' },
  { id: 4, name: 'Hip-Hop' }
];

export const products = {
  1: [
    { id: 101, name: 'Linkin Park - Hybrid Theory', likes: 0, image: 'URL_HERE', description: '...', rating: 5 },
    { id: 102, name: 'Linkin Park - Meteora', likes: 0, image: 'URL_HERE', description: '...', rating: 5 },
    { id: 103, name: 'Twenty One Pilots - Trench', likes: 0, image: 'URL_HERE', description: '...', rating: 5 },
    { id: 104, name: 'Twenty One Pilots - Clancy', likes: 0, image: 'URL_HERE', description: '...', rating: 5 },
    { id: 105, name: 'Linkin Park - One More Light', likes: 0, image: 'URL_HERE', description: '...', rating: 5 }
  ],
  2: [
    { id: 201, name: 'Ariana Grande - Sweetener', likes: 0, image: 'URL_HERE', description: '...', rating: 5 },
    { id: 202, name: 'Dua Lipa - Future Nostalgia', likes: 0, image: 'URL_HERE', description: '...', rating: 5 },
    { id: 203, name: 'Ed Sheeran - Divide', likes: 0, image: 'URL_HERE', description: '...', rating: 5 },
    { id: 204, name: 'Harry Styles - Fine Line', likes: 0, image: 'URL_HERE', description: '...', rating: 5 },
    { id: 205, name: 'Taylor Swift - 1989', likes: 0, image: 'URL_HERE', description: '...', rating: 5 }
  ]
};
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient()
  ]
};