import { Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ProduitsComponent } from './produits/produits.component';
import { AppartementComponent } from './appartement/appartement.component';
import { ProprieteinoccupeComponent } from './proprieteinoccupe/proprieteinoccupe.component';
import { ApapartementComponent } from './apapartement/apapartement.component';

export const routes: Routes = [
       { path: '', component: HomecomponentComponent },
        { path: 'produits', component: ProduitsComponent },// Route vers un produit
        { path: 'apartement', component: ApapartementComponent }, // Route vers un appartement

        { path: 'maisonprive', component: AppartementComponent }, // Route vers un appartement
        { path: 'proprieteinoccupe', component: ProprieteinoccupeComponent } // Route vers un appartement
      
];
