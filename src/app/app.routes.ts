import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ViewUsersComponent } from './Admin/users/view-users/view-users.component';
import { ContactMeComponent } from './Components/Forms/contact-me/contact-me.component';
import { StoreComponent } from './Pages/store/store.component';
import { AboutComponent } from './Pages/about/about.component';

export const routes: Routes = [
  {
    path: 'admin/dashboard',
    component: DashboardComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'users', // child route path
        component: ViewUsersComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ContactMeComponent, // another child route component that the router renders
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
  {
    path: 'contact-me',
    title: 'Contactame',
    component: ContactMeComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
  },
];
