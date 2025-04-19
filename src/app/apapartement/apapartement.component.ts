import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SousheroComponent } from '../soushero/soushero.component';
import { SouspourajaxComponent } from '../souspourajax/souspourajax.component';
import { SousrepondbesoinComponent } from '../sousrepondbesoin/sousrepondbesoin.component';
import { SousrelevedefisComponent } from '../sousrelevedefis/sousrelevedefis.component';
import { SousecuriteComponent } from '../sousecurite/sousecurite.component';
import { SousdectionComponent } from '../sousdection/sousdection.component';
import { SousconsecuriteComponent } from '../sousconsecurite/sousconsecurite.component';
import { SoustemoinComponent } from '../soustemoin/soustemoin.component';
import { SousplusupervisoirComponent } from '../sousplusupervisoir/sousplusupervisoir.component';
import { SousrealiseprojetComponent } from '../sousrealiseprojet/sousrealiseprojet.component';
import { SousautresoluComponent } from '../sousautresolu/sousautresolu.component';

@Component({
  selector: 'app-apapartement',
  imports: [NavbarComponent,FooterComponent,
    SousheroComponent,
    SouspourajaxComponent,
    SousrepondbesoinComponent,
  SousrelevedefisComponent,
SousecuriteComponent,
SousdectionComponent,
SousconsecuriteComponent,
SoustemoinComponent,
SousplusupervisoirComponent,
SousrealiseprojetComponent,
SousautresoluComponent],
  templateUrl: './apapartement.component.html',
  styleUrl: './apapartement.component.scss'
})
export class ApapartementComponent {

}
