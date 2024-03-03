import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Pages/home/home.component";
import { HeaderComponent } from "./Shared/header/header.component";
import { FooterComponent } from "./Shared/footer/footer.component";
import { CardProductComponent } from "./Components/Cards/card-product/card-product.component";
import { StoreComponent } from "./Pages/store/store.component";
import { DashboardComponent } from "./Admin/dashboard/dashboard.component";
import { CreateUserComponent } from "./Components/Forms/UserForms/create-user/create-user.component";
import { ContactMeComponent } from "./Components/Forms/contact-me/contact-me.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, DashboardComponent, CardProductComponent, StoreComponent, CreateUserComponent, ContactMeComponent]
})
export class AppComponent {
  title = 'crm';
 
}
