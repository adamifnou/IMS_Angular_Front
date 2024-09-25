import { Component, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsTableComponent } from '../materials-table/materials-table.component';
import { HttpProviderService } from '../service/http-provider.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbNavModule,
    MaterialsTableComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
	active = 1;
  columnsToShow: string[] = ["name", "code","description","compartmentName", "quantity"];
  token = "";
  materials: any[] = [ ];

  constructor(private httpProviderService:HttpProviderService  ){};

  ngOnInit(): void {
    if (typeof sessionStorage !== 'undefined') {
      this.token = sessionStorage.getItem('loggedUserToken') || '';
    } else {
      console.log('sessionStorage is not available');
    }
    this.loadMaterials();
  }
  loadMaterials(){
    this.httpProviderService.getAllMaterials(this.token).subscribe
    ((response) => {
      this.materials = response.body;
    },
    (error) => {
      console.log("load material error: "+error.message);
    }
  );
  }

}
