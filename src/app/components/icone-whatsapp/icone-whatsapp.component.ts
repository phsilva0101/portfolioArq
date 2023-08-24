import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icone-whatsapp',
  templateUrl: './icone-whatsapp.component.html',
  styleUrls: ['./icone-whatsapp.component.css']
})
export class IconeWhatsappComponent implements OnInit {

  constructor() { }

  public showMessage: boolean = false;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 20000);  // A mensagem será oculta após 5 segundos
    }, 10000);  // Mostra a mensagem a cada 10 segundos
  }


  closeMessage() {
    this.showMessage = false;
  }

}
