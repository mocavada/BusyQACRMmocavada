import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AsdataTableDataSource } from './asdata-table-datasource';

@Component({
  selector: 'app-asdata-table',
  templateUrl: './asdata-table.component.html',
  styleUrls: ['./asdata-table.component.css']
})
export class AsdataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AsdataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new AsdataTableDataSource(this.paginator, this.sort);
  }
}
