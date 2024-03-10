import { Component } from '@angular/core';

import { ViewUsersComponent } from '../users/view-users/view-users.component';
import { ViewCustomersComponent } from '../Customers/view-customers/view-customers.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [ViewUsersComponent, ViewCustomersComponent],
})
export class DashboardComponent {}
