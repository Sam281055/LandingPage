import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  isYearly=false;

  packages = [
    {name:'Start', monthlyPrice: 19, yearlyPrice:199, description:'A common form of Lorem ipsum reads: Lore ipsum dolor sit amet, consectetur adipiscing elit.', green: '../../../assets/circverd.png'},
    {name:'Advance', monthlyPrice: 39, yearlyPrice:399, description:'A common form of Lorem ipsum reads: Lore ipsum dolor sit amet, consectetur adipiscing elit.', green: '../../../assets/circverd.png'},
    {name:'Premium', monthlyPrice: 59, yearlyPrice:599, description:'A common form of Lorem ipsum reads: Lore ipsum dolor sit amet, consectetur adipiscing elit.', green: '../../../assets/circverd.png'},
  ]
  setYearly(){
    this.isYearly = !this.isYearly;
  }
}
