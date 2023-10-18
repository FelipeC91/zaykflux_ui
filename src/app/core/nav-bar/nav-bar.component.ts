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

  toggleTicketSearch(ticketNumberInput: HTMLElement) {
    if(this.showTicketSearch) {
      this.showTicketSearch = false;
      ticketNumberInput.hidden = true;
      
    } else {
      this.showTicketSearch = true;
      ticketNumberInput.hidden = false;
      ticketNumberInput.focus();
    }


  }

  onticketNumberInputLeave(ticketNumberInput: HTMLInputElement) {
    ticketNumberInput.value = '';
    this.toggleTicketSearch(ticketNumberInput)
  }

}
