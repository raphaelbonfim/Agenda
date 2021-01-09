import { ContactDeleteComponent } from './components/contact/contact-delete/contact-delete.component';
import { ContactUpdateComponent } from './components/contact/contact-update/contact-update.component';
import { ContactCreateComponent } from './components/contact/contact-create/contact-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ContactCrudComponent } from './views/contact-crud/contact-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  }, {
    path: "contacts",
    component: ContactCrudComponent

  }, {
    path: "contact/create",
    component: ContactCreateComponent
  }, {
    path: "contact/update/:id",
    component: ContactUpdateComponent
  }, {
    path: "contact/delete/:id",
    component: ContactDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
