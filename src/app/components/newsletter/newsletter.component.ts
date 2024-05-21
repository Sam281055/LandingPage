import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {

}
