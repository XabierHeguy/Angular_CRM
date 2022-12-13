import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEditClientComponent } from '../clients/pages/page-edit-client/page-edit-client.component';
import { PageAddOrderComponentComponent } from './pages/page-add-order-component/page-add-order-component.component';
import { PageListOrdersComponentComponent } from './pages/page-list-orders-component/page-list-orders-component.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {path: '', component: PageListOrdersComponentComponent},
  {path: 'edit', component: PageEditClientComponent},
  {path: 'add', component: PageAddOrderComponentComponent},
  {path: 'not-found', component: PageNotFoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
