import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
@Input() title:string='';
@Input() customers:{id: number; firstName: string, lastName: string, surname: string, email:string, nationality: string, age: string,status:boolean}[]=[];
}
