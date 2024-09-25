import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-materials-table',
  standalone: true,
  imports: [CommonModule,
    NgbPaginationModule,
    FormsModule
  ],
  templateUrl: './materials-table.component.html',
  styleUrls: ['./materials-table.component.css']
})
export class MaterialsTableComponent implements OnInit{
  @Input() dataToShow: any[] = [];
  @Input() columnsToShow: string[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  paginatedData: any[] = [];
  searchQuery: string = '';

  ngOnInit() {
    this.totalItems = this.dataToShow.length;
    this.updatePaginatedData();
  }

  // Handle pagination change
  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedData = this.getFilteredData().slice(startIndex, endIndex);
  }

  // Filter data based on search query
  getFilteredData() {
    if (!this.searchQuery.trim()) {
      return this.dataToShow;
    }
    return this.dataToShow.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );
  }

  // Handle page change
  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  // Handle search query input
  onSearch(query: string) {
    this.searchQuery = query;
    this.currentPage = 1;
    this.updatePaginatedData();
  }
}
