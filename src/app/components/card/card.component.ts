import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: any = { images: [], title: '', id: '', pasta: '' };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProject(): void {
    localStorage.setItem('length', JSON.stringify(this.project.images.length));
    localStorage.setItem('pasta', JSON.stringify(this.project.pasta));
    localStorage.setItem('titulo', JSON.stringify(this.project.title));


    this.router.navigate(['/projeto', this.project.id]);
  }

}
