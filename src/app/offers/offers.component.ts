import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

// Mock offer data structure
interface Offer {
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  @Input() shopId: string = ''; // Input for shop ID

  offers: Offer[] = [];

  constructor() {}

  ngOnInit(): void {
    // Fetch the offers based on the shopId
    this.loadOffers(this.shopId);
  }

  // Simulated method to fetch offers for a specific shop
  loadOffers(shopId: string): void {
    if (shopId) {
      // Simulate offers retrieval
      this.offers = [
        { title: 'Discounted Shoes', description: '50% off on selected shoes', price: 49.99 },
        { title: 'Buy 1 Get 1 Free', description: 'Applicable on all accessories', price: 29.99 }
      ];
    }
  }
}
