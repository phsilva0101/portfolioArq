import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit {
  projects = [
    {
      id: 1,
      images: Array.from({ length: 11 }, (v, i) => `../../../assets/motorhome/image${i + 1}.jpeg`),
      title: 'Projeto Sala Retrô',
      pasta: 'motorhome',
    },
    {
      id: 2,
      images: Array.from({ length: 18 }, (v, i) => `../../../assets/maquete/image${i + 1}.jpeg`),
      title: 'Casa Marika-Alderton',
      pasta: 'maquete',
    },
    {
      id: 3,
      images: Array.from({ length: 6 }, (v, i) => `../../../assets/quiosque/image${i + 1}.jpeg`),
      title: 'Quiosque Shopping',
      pasta: 'quiosque',
    },
    {
      id: 4,
      images: Array.from({ length: 25 }, (v, i) => `../../../assets/casa1Sketchup/image${i + 1}.jpeg`),
      title: 'Projeto pessoal com Sketchup',
      pasta: 'casa1Sketchup',
    },
    {
      id: 5,
      images: [
        '../../../assets/images/image5.jpg',
        '../../../assets/images/image3.jpg',
      ],
      title: 'Projeto 5',
    },
    {
      id: 6,
      images: [
        '../../../assets/images/image1.jpg',
        '../../../assets/images/image2.jpg',
      ],
      title: 'Projeto 6',
    },

    // ... outros projetos
  ];

  constructor() {}

  ngOnInit(): void {}
}
