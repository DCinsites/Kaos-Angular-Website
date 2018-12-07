import { AdminComponent } from './admin/admin.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const adminRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        children: [
          { path: "dashboard", component: AdminDashboardComponent },
          { path: "orders", component: ManageOrdersComponent },
          {
            path: "products",
            component: ManageProductsComponent
          },
          { path: "", component: AdminDashboardComponent },
          { 
            path: "users",
            component: ManageUsersComponent
           }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
