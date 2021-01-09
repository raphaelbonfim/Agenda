import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact-crud',
  templateUrl: './contact-crud.component.html',
  styleUrls: ['./contact-crud.component.css']
})
export class ContactCrudComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public navigateToContactCreate(): void {
    this.router.navigate(['/contact/create'])
  }
}
