import { Component } from '@angular/core';
import { CategoriesListsComponent } from "../categories-lists/categories-lists.component";
import { NavbarComponent } from "../navbar/navbar.component";



@Component({
  selector: 'app-produits',
  imports: [CategoriesListsComponent, NavbarComponent],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.scss'
})
export class ProduitsComponent {

}
