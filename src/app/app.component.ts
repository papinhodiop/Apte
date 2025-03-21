import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Si vous utilisez le routeur
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { NewComponent } from './new/new.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { BuyComponent } from './buy/buy.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Si vous utilisez le routeur
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    NewComponent,
    SolutionsComponent,
    BuyComponent,
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}