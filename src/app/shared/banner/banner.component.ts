import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() bannerbg?:string;
  @Input() heading?:string;
  @Input() subheading?:string;
  @Input() btn1?:string;
  @Input() btn2?:string;
}
