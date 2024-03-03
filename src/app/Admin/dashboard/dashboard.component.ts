import { Component } from '@angular/core';
import { ContactMeComponent } from "../../Components/Forms/contact-me/contact-me.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [ContactMeComponent]
})
export class DashboardComponent {

}
