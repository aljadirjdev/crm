import { Component, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuDropdown = 'hidden';
  menuMobile = 'hidden';
  menus: { id: number; name: string; link: string; icon: string }[] = [
    { id: 1, name: 'Home', link: 'home', icon: 'fa-solid fa-house' },
    { id: 2, name: 'Store', link: 'store', icon: 'fa-solid fa-house' },
    { id: 3, name: 'About', link: 'about', icon: 'fa-solid fa-house' },
    {
      id: 4,
      name: 'Contactame',
      link: 'contact-me',
      icon: 'fa-solid fa-house',
    },
  ];
  viewMenu: any;

  viewCloseDropdown() {
    if (this.menuDropdown) {
      this.menuDropdown = '';
    } else {
      this.menuDropdown = 'hidden';
    }
  }
  viewCloseMenuMobil() {
    if (this.menuMobile) {
      this.menuMobile = '';
    } else {
      this.menuMobile = 'hidden';
    }
  }
}
