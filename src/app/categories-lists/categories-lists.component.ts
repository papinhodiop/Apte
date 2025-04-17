import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-categories-lists',
  imports: [CommonModule],
  templateUrl: './categories-lists.component.html',
  styleUrl: './categories-lists.component.scss'
})
export class CategoriesListsComponent {
  categories = [
    { name: 'Tous', icon: 'assets/all.png' },
    { name: 'Électronique', icon: 'assets/images/incident.jpg' },
    { name: 'Vêtements', icon: 'assets/images/produits.png' },
    { name: 'Maison', icon: 'assets/home.png' },
    { name: 'Maison', icon: 'assets/home.png' },
    { name: 'Maison', icon: 'assets/home.png' },
    { name: 'Maison', icon: 'assets/home.png' },
    { name: 'Maison', icon: 'assets/home.png' }
  ];

  products = [
    { name: 'Téléphone', description: 'Smartphone dernier cri', price: 699, image: 'assets/images/produits.png', category: 'Électronique' },
    { name: 'T-shirt', description: 'Coton 100%', price: 19, image: 'assets/tshirt.jpg', category: 'Vêtements' },
    { name: 'Canapé', description: 'Confortable et design', price: 499, image: 'assets/sofa.jpg', category: 'Maison' }
  ];

  selectedCategory = this.categories[0];
  
  get filteredProducts() {
    if (this.selectedCategory.name === 'Tous') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory.name);
  }

  selectCategory(category: any) {
    this.selectedCategory = category;
  }
}

