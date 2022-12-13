import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PagesListClientsComponent } from './pages/pages-list-clients/pages-list-clients.component';

const routes: Routes = [
  {path: '', component: PagesListClientsComponent},
  {path: 'edit', component: PageEditClientComponent},
  {path: 'add', component: PageAddClientComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
