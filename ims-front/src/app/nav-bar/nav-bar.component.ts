import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,
    NgbDropdownModule

  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
