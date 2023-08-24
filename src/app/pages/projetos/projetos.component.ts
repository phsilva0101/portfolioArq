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
      images: [
        '../../../assets/images/image2.jpg',
        '../../../assets/images/image3.jpg',
      ],
      title: 'Projeto 1',
    },
    {
      id: 2,
      images: [
        '../../../assets/images/image2.jpg',
        '../../../assets/images/image4.jpg',
      ],
      title: 'Projeto 2',
    },
    {
      id: 3,
      images: [
        '../../../assets/images/image3.jpg',
        '../../../assets/images/image5.jpg',
      ],
      title: 'Projeto 3',
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
