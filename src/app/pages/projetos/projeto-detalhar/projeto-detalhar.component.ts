import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-detalhar',
  templateUrl: './projeto-detalhar.component.html',
  styleUrls: ['./projeto-detalhar.component.css'],
})
export class ProjetoDetalharComponent implements OnInit {
  mainPhoto = `../../../assets/casa1Sketchup/image1.jpeg`;
  photos = Array.from({ length: 25 }, (v, i) => `../../../assets/casa1Sketchup/image${i + 1}.jpeg`);
  projectDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea dictumst. Duis euismod libero nec condimentum lacinia. Integer nec porttitor quam. Proin non sem et nunc feugiat posuere. Curabitur ut ullamcorper libero, eu condimentum nunc Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse potenti. Fusce tempor quis quam eget venenatis. Sed id purus varius, ullamcorper quam eget, porta elit. Morbi suscipit velit in orci posuere, euismod lacinia purus dapibus. Integer aliquam, purus a auctor dignissim, quam lorem varius lacus, at posuere ex justo a erat. Praesent aliquet, nunc ut sollicitudin facilisis, odio orci efficitur ligula, ut faucibus justo sapien in leo. Vivamus et eros massa. Integer eget luctus dolor. Aenean scelerisque lacus ultrices ipsum finibus ultricies. Nam convallis, odio in lobortis maximus, mi quam'
  titleDescription= '';
  isZoomed = false;

  constructor() {}

  ngOnInit(): void {
    const length = localStorage.getItem('length');
    const pasta = localStorage.getItem('pasta')?.replace(/"/g, '');
    const titulo = localStorage.getItem('titulo');

    console.log(length, pasta, titulo);
    this.photos = Array.from({ length: Number(length) }, (v, i) => `../../../assets/${pasta}/image${i + 1}.jpeg`);
    this.titleDescription = titulo ?? '';
    this.mainPhoto = this.photos[0];

  }
  
  ngOnDestroy(): void {
    localStorage.removeItem('length');
    localStorage.removeItem('pasta');
    localStorage.removeItem('titulo');
  }

  setMainPhoto(photo: string) {
    this.mainPhoto = photo;
  }
  
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
