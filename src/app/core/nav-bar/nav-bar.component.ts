import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  showSideBar = false;
  showTicketSearch = false;


  ticketNumber?: number;


  toggleTicketSearch(ticketNumberInput: ElementRef) {
    if(!this.showTicketSearch ) {
      this.showTicketSearch = true;

      ticketNumberInput.nativeElement.focus();
    } else {
      this.showTicketSearch = false;
    }


  }

}
