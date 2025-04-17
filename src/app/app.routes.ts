import { Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ProduitsComponent } from './produits/produits.component';
import { AppartementComponent } from './appartement/appartement.component';
import { ProprieteinoccupeComponent } from './proprieteinoccupe/proprieteinoccupe.component';

export const routes: Routes = [
       { path: '', component: HomecomponentComponent },
        { path: 'produits', component: ProduitsComponent },// Route vers un produit
        { path: 'appartement', component: AppartementComponent }, // Route vers un appartement
        
        { path: 'proprieteinoccupe', component: ProprieteinoccupeComponent } // Route vers un appartement
      
];
