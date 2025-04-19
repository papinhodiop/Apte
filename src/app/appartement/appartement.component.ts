import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { ApparteComponent } from '../apparte/apparte.component';
import { FooterComponent } from '../footer/footer.component';
import { PourquoiajaxComponent } from '../pourquoiajax/pourquoiajax.component';
import { RepondbesoinComponent } from '../repondbesoin/repondbesoin.component';
import { RelevedefisComponent } from '../relevedefis/relevedefis.component';
import { VdpcComponent } from '../vdpc/vdpc.component';
import { ConstsecuriteComponent } from '../constsecurite/constsecurite.component';
import { TemoinclientComponent } from '../temoinclient/temoinclient.component';
import { SupajaxComponent } from '../supajax/supajax.component';
import { RealiseprojetComponent } from '../realiseprojet/realiseprojet.component';
import { FaqComponent } from '../faq/faq.component';
import { AutresolutionComponent } from '../autresolution/autresolution.component';
import { ApheroComponent } from '../aphero/aphero.component';
@Component({
  selector: 'app-appartement',
  imports: [NavbarComponent,ApparteComponent,
    FooterComponent,PourquoiajaxComponent,
    RepondbesoinComponent,RelevedefisComponent,
    VdpcComponent,ConstsecuriteComponent,
    TemoinclientComponent,SupajaxComponent,
    RealiseprojetComponent,FaqComponent,
    AutresolutionComponent,ApheroComponent],
  templateUrl: './appartement.component.html',
  styleUrl: './appartement.component.scss'
})
export class AppartementComponent {

}
