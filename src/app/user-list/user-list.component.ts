import { Component, OnInit } from '@angular/core';

import { ApiServiceService } from './../api-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private data : ApiServiceService) { }


  ngOnInit() {
  }

  Remove(a) {
    this.data.RemoveData(a);
  }

}
