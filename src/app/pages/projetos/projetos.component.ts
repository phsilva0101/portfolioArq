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
    },
    {
      id: 2,
      images: Array.from({ length: 18 }, (v, i) => `../../../assets/maquete/image${i + 1}.jpeg`),
      title: 'Casa Marika-Alderton',
    },
    {
      id: 3,
      images: Array.from({ length: 6 }, (v, i) => `../../../assets/quiosque/image${i + 1}.jpeg`),
      title: 'Quiosque Shopping',
    },
    {
      id: 4,
      images: [
        '../../../assets/images/image4.jpg',
        '../../../assets/images/image1.jpg',
      ],
      title: 'Projeto 4',
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
