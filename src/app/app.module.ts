import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiServiceService } from './api-service.service';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      { path : '', component : UserListComponent },
      { path : 'add-user', component : AddUserComponent }
 
    ])

  ],
  providers: [ ApiServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
