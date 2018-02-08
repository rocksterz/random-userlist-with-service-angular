import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ApiServiceService {


  UserList: Object[] = [];
  
  constructor(private http:Http) { 

    
        this.http.get ('https://jsonplaceholder.typicode.com/users') 
    
        .subscribe (
          result => { 
            for (var i = 0; i < result.json().length; i++) {
                var user = result.json()[i];
                var UserObject = {
                  'Id' : user.id,
                  'Name' : user.name,
                  'Email' : user.email,
                  'Address' : user.address.street,
                  'Phone' : user.phone,
                  'Company' : user.company.name
             };
            this.UserList.push(UserObject);
           }
            
          },
          error => { 
            console.log (error) 
          }
        );
  }


  RemoveData(id) {
    for (var i = 0; i < this.UserList.length; i++) {
      if (this.UserList[i]["Id"] == id) {
        this.UserList.splice(i, 1);
        break;
      }
      console.log(this.UserList);
    }
  }
}
