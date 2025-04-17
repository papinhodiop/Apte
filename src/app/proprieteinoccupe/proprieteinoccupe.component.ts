import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { PropourquoiajaxComponent } from '../propourquoiajax/propourquoiajax.component';
import { ProfortifierComponent } from '../profortifier/profortifier.component';
import { ProrelevedefisComponent } from '../prorelevedefis/prorelevedefis.component';
import { ProsecureinsComponent } from '../prosecureins/prosecureins.component';
import { ProconsecureComponent } from '../proconsecure/proconsecure.component';
import { ProsubplusComponent } from '../prosubplus/prosubplus.component';
import { ProrealisesimiComponent } from '../prorealisesimi/prorealisesimi.component';
import { ProfacComponent } from '../profac/profac.component';
import { ProautresolComponent } from '../proautresol/proautresol.component';
import { ProtemoinclientComponent } from '../protemoinclient/protemoinclient.component';
import { ProheroComponent } from '../prohero/prohero.component';

@Component({
  selector: 'app-proprieteinoccupe',
  imports: [NavbarComponent,
    PropourquoiajaxComponent,
    FooterComponent,
    ProfortifierComponent,
  ProrelevedefisComponent,
ProsecureinsComponent,
ProconsecureComponent,

ProsubplusComponent,
ProrealisesimiComponent,
ProfacComponent,
ProautresolComponent,
ProtemoinclientComponent,
ProheroComponent],
  templateUrl: './proprieteinoccupe.component.html',
  styleUrl: './proprieteinoccupe.component.scss'
})
export class ProprieteinoccupeComponent {

}
