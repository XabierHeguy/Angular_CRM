import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponentComponent } from './pages/page-add-order-component/page-add-order-component.component';
import { PageEditOrderComponentComponent } from './pages/page-edit-order-component/page-edit-order-component.component';
import { PageListOrdersComponentComponent } from './pages/page-list-orders-component/page-list-orders-component.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    PageListOrdersComponentComponent,
    PageAddOrderComponentComponent,
    PageEditOrderComponentComponent,
    PageNotFoundComponentComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
