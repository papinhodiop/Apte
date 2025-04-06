import { Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ProduitsComponent } from './produits/produits.component';

export const routes: Routes = [
       { path: '', component: HomecomponentComponent },
        { path: 'produits', component: ProduitsComponent } // Route vers un produit
      
];
