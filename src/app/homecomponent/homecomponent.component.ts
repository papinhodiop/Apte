import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HeroComponent } from "../hero/hero.component";
import { FeaturesComponent } from "../features/features.component";
import { NewComponent } from "../new/new.component";
import { SolutionsComponent } from "../solutions/solutions.component";
import { ProductsComponent } from "../footer/products.component";
import { BuyComponent } from "../buy/buy.component";
import { CategoriesListsComponent } from "../categories-lists/categories-lists.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-homecomponent',
  imports: [NavbarComponent, HeroComponent, FeaturesComponent, NewComponent, SolutionsComponent, BuyComponent,FooterComponent],
  templateUrl: './homecomponent.component.html',
  styleUrl: './homecomponent.component.scss'
})
export class HomecomponentComponent {

}
