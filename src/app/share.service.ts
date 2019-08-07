import { Injectable } from '@angular/core';
import { User } from './UserDetails/ViewModels/user';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  ListOfUsers:User[];
  constructor() { 
    this.ListOfUsers=
    [
      new User(1,'Ahmed',15478,'Active','a@test.com'),
      new User(2,'Omar',65478,'Active','O@test.com'),
      new User(3,'Ali',25478,'Active','a@test.com'),
      new User(4,'Basma',36987,'Active','b@test.com'),
      new User(5,'Soha',24367,'Active','S@test.com')
    ]
  }
}
