import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars, faBell, faMagnifyingGlass, faPlus, faChartLine, faTicket, faUserTie, faChartSimple, faBookOpenReader, faIdCard, faGears, faTicketSimple } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    SidebarModule,
    InputTextModule,
    OverlayPanelModule,
    
    FontAwesomeModule

  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faBell, faMagnifyingGlass, faPlus, faChartLine, faTicket, faUserTie, faChartSimple, faBookOpenReader, faIdCard, faGears, faTicketSimple )
  }
  
}
