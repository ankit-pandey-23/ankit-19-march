import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule,MatTableModule,MatButtonModule,MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PollsListingComponent } from './component/polls-listing/polls-listing.component';
import { DialogComponent } from './component/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PollsListingComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
        { path: '', component: PollsListingComponent },
        { path: 'polls', component: PollsListingComponent }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
