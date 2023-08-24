import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: any = { images: [], title: '', id: '' };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProject(): void {
    this.router.navigate(['/projeto', this.project.id]);
  }

}
