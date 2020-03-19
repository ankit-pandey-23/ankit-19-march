import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {HitsService} from '../../services/hits.service';
import {timer,Subscription} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-polls-listing',
  templateUrl: './polls-listing.component.html',
  styleUrls: ['./polls-listing.component.css']
})
export class PollsListingComponent implements OnInit {
  Subscription:Subscription
  displayedColumns: string[] = ['title', 'url', 'author', 'created_at'];
  dataSource: any

  constructor(public dialog: MatDialog,public hitsService:HitsService) {}

  ngOnInit() {
    this.getPollResult()
  }

  ngOnDestroy(){
    this.Subscription.unsubscribe()
  }

  getPollResult(){
    this.Subscription = timer(0,10000).pipe(
      switchMap(()=> this.hitsService.getData())
    ).subscribe((response)=>{
      this.dataSource = new MatTableDataSource(response.hits);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {row}
    });

    dialogRef.afterClosed();
  }
}