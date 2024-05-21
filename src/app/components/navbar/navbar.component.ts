import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  Logo = '../../../assets/react.png'
  global = '../../../assets/global.png'
  Menu = false;
  AbrirMenu = '../../../assets/menuOpen.png'
  CerrarMenu = '../../../assets/menuAbierto2.png'
  navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ]

  MenuAbierto(){
    this.Menu = !this.Menu;
  }


}
