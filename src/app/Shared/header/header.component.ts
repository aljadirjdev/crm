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
    { id: 1, name: 'Store', link: 'store', icon: 'fa-solid fa-house' },
    { id: 1, name: 'About', link: 'About', icon: 'fa-solid fa-house' },
    {
      id: 1,
      name: 'Contact me',
      link: 'Contact-me',
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
