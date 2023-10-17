import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    
    FontAwesomeModule

  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(faBars)
  }
  
}
