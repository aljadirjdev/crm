import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { StoreComponent } from './Pages/store/store.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { UsersComponent } from './Components/Boards/users/users.component';
import { CustomersComponent } from './Admin/customers/customers/customers.component';

export const routes: Routes = [
  {
    path: 'admin/dashboard',
    component: DashboardComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'users', // child route path
        component: UsersComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: CustomersComponent, // another child route component that the router renders
      },
    ],
  },

  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'store',
    title: 'Store',
    component: StoreComponent,
  },
];
