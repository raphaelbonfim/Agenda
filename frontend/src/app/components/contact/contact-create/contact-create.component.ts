import { Contact } from './../contact.model';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  contact: Contact = {
    name: '',    
    address: '',
    phone: null
  }

  constructor(public contactService: ContactService,
    public router: Router) { }

  ngOnInit(): void {
    
  }

  createContact(): void {
    this.contactService.create(this.contact).subscribe((retorno) => {
      console.log(retorno);
      this.contactService.showMessage('Contato Adicionado!')
      this.router.navigate(['/contacts'])
    })    
  }

  cancel(): void {
    this.router.navigate(['/contacts'])
  }
}
