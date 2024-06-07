import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, MatSortModule} from "@angular/material/sort";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent implements OnInit{
  public payments :any;
  public dataSource: any;
  public displayedColumns=['id','date','amount','type','status','firstname'];

  @ViewChild(MatPaginator) pagiantor! : MatPaginator;
  @ViewChild(MatSort) sort! : MatSort;
    constructor(private http:HttpClient) {
    }
    ngOnInit() {
      this.http.get("http://localhost:8024/payments")
        .subscribe(
         data =>{
          this.payments=data;
          this.dataSource=new MatTableDataSource(this.payments);
           this.dataSource.pagiantor=this.pagiantor;
           this.dataSource.sort=this.sort;
      },
          error =>{
           console.log(error);
          }
        )
    }
}
