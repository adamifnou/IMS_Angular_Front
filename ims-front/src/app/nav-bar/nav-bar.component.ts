import { Component, OnInit } from '@angular/core';
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
export class NavBarComponent implements OnInit {
  isNavbarCollapsed = true;
  userName: string | null = '';

  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {
      this.userName = sessionStorage.getItem('loggedUserName');
    } else {
      console.error('sessionStorage is not available');
    }
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
