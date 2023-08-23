import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  menuVisible: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    console.log('toggleMenu', this.menuVisible);
    this.menuVisible = !this.menuVisible;
  }

  burguerItens(): string {
    if (this.menuVisible) {
      return 'show';
    }

    return '';
  }
}
