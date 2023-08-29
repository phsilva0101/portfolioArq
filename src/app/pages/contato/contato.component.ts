import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contactForm!: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.contactForm.value)
  }

}
