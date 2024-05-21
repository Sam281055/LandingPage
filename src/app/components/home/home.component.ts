import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public banner = '../../../assets/bannerbg.png'




}
