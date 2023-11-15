import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-detalhar',
  templateUrl: './projeto-detalhar.component.html',
  styleUrls: ['./projeto-detalhar.component.css'],
})
export class ProjetoDetalharComponent implements OnInit {
  mainPhoto = ``;
  photos:any = []
  projectDescription = ''
  titleDescription= '';
  isZoomed = false;
  methods = ''

  constructor() {}

  ngOnInit(): void {
    const length = localStorage.getItem('length');
    const pasta = localStorage.getItem('pasta')?.replace(/"/g, '');
    const titulo = localStorage.getItem('titulo');
    const descricao = localStorage.getItem('descricao');
    const metodos = localStorage.getItem('metodos');

    this.photos = Array.from({ length: Number(length) }, (v, i) => `../../../assets/${pasta}/image${i + 1}.jpeg`);
    this.titleDescription = titulo ?? '';
    this.mainPhoto = this.photos[0];
    this.projectDescription = descricao ?? '';
    this.methods = metodos ?? '';

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
