import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(private data: ApiServiceService) { }

  NewUser = {
    'Id' : 0,
    'Name' : '',
    'Email' : '',
    'Address' : '',
    'Phone' : '',
    'Company' : '',
  }

  ngOnInit() {
  }

  AddUser() {
    this.NewUser['Id'] = this.data.UserList[this.data.UserList.length - 1]['Id'] + 1;
    this.data.UserList.push(this.NewUser);
  }
  
}
