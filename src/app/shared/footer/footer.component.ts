import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  react = '../../../assets/react.png'
  facebook = '../../../assets/facebook.png'
  instagram = '../../../assets/Instagram.png'
  linkedin = '../../../assets/Linkedin.png'
  twitter = '../../../assets/Twitter.png'
}
