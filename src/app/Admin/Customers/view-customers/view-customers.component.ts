import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../Interfaces/customer';
import Swal from 'sweetalert2';
import { first } from 'rxjs';

@Component({
  selector: 'app-view-customers',
  standalone: true,
  imports: [ViewCustomersComponent],
  templateUrl: './view-customers.component.html',
  styleUrl: './view-customers.component.css',
})
export class ViewCustomersComponent implements OnInit {
  title: string = 'Customers';
  customers: Customer[] = [];

  ngOnInit(): void {
    this.customers.push(
      {
        id: 1,
        firstName: 'Amy',
        lastName: 'Lorena',
        documentType: 'CC',
        documentNumber: '10123455454',
        email: 'example@example.com',
        nationality: 'Colombiano',
        country: 'Colombia',
        city: 'Bogota',
        address: 'Cra 34#67-65',
        status: true,
        rol: 'Customer',
      },
      {
        id: 2,
        firstName: 'Amy',
        lastName: 'Lorena',
        documentType: 'CC',
        documentNumber: '10123455454',
        email: 'example@example.com',
        nationality: 'Colombiano',
        country: 'Colombia',
        city: 'Bogota',
        address: 'Cra 34#67-65',
        status: true,
        rol: 'Customer',
      },
      {
        id: 3,
        firstName: 'Amy',
        lastName: 'Lorena',
        documentType: 'CC',
        documentNumber: '10123455454',
        email: 'example@example.com',
        nationality: 'Colombiano',
        country: 'Colombia',
        city: 'Bogota',
        address: 'Cra 34#67-65',
        status: false,
        rol: 'Customer',
      },
      {
        id: 4,
        firstName: 'Amy',
        lastName: 'Lorena',
        documentType: 'CC',
        documentNumber: '10123455454',
        email: 'example@example.com',
        nationality: 'Colombiano',
        country: 'Colombia',
        city: 'Bogota',
        address: 'Cra 34#67-65',
        status: true,
        rol: 'Customer',
      },
      {
        id: 5,
        firstName: 'Amy',
        lastName: 'Lorena',
        documentType: 'CC',
        documentNumber: '10123455454',
        email: 'example@example.com',
        nationality: 'Colombiano',
        country: 'Colombia',
        city: 'Bogota',
        address: 'Cra 34#67-65',
        status: true,
        rol: 'Customer',
      },
      {
        id: 6,
        firstName: 'Amy',
        lastName: 'Lorena',
        documentType: 'CC',
        documentNumber: '10123455454',
        email: 'example@example.com',
        nationality: 'Colombiano',
        country: 'Colombia',
        city: 'Bogota',
        address: 'Cra 34#67-65',
        status: true,
        rol: 'Customer',
      }
    );
  }

  addCustomer() {
    this.customers.push({
      id: 1,
      firstName: 'Amy',
      lastName: 'Lorena',
      documentType: 'CC',
      documentNumber: '10123455454',
      email: 'example@example.com',
      nationality: 'Colombiano',
      country: 'Colombia',
      city: 'Bogota',
      address: 'Cra 34#67-65',
      status: true,
      rol: 'Customer',
    });

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El usuario se ha creado con exito',
      showConfirmButton: false,
      timer: 1000,
    });
  }

  editCustomer() {
    alert('Editar cliente');
  }
  deleteCustomer(id: number): void {
    this.customers = this.customers.filter((Customer) => Customer.id !== id);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'El usuario se ha eliminado con exito',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  viewCustomers() {
    alert('Ver clientes');
  }
  detailCustomer(): void {}
}
