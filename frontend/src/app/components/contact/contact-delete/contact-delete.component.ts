import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { Contact } from './../contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {
  [x: string]: any;

  contact!: Contact;

  constructor(public ContactService: ContactService,
    private router: Router, private route: ActivatedRoute) {
    this.contact = <any>{};

  }

  ngOnInit(): void {
    var id = <any>this.route.snapshot.paramMap.get('id');
    this.ContactService.readById(id).subscribe(contact => {
      this.contact = contact
    })
  }

  deleteContact(): void {
    this.ContactService.delete(<any>this.contact.id).subscribe(() => {
      this.ContactService.showMessage('Contato excluido com sucesso!')
      this.router.navigate(['/contacts'])
    })
  }

  cancel(): void {
    this.router.navigate(['/contacts'])
  }
}
