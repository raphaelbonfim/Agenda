import { Contact } from './../contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  contact!: Contact;

  constructor(private ContactService: ContactService,
    private router: Router,
    private route: ActivatedRoute) {
    this.contact = <any>{};
  }

  ngOnInit(): void {
    var id = <any>this.route.snapshot.paramMap.get('id')
    this.ContactService.readById(id).subscribe(contact => {
      this.contact = contact;
    });
  }

  updateContact(): void {
    this.ContactService.update(this.contact).subscribe(() => {
      this.ContactService.showMessage('Contato Atualizado com sucesso!')
      this.router.navigate(['/contacts'])
    })

  }

  cancel(): void {
    this.router.navigate(['/contacts'])

  }
}
