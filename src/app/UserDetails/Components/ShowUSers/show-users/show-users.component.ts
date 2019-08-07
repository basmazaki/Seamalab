// https://stackblitz.com/angular/dnbermjydavk?file=app%2Ftable-overview-example.ts
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/UserDetails/ViewModels/user';
import { ShareService } from 'src/app/share.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUSersComponent implements OnInit {

  ListOfUserToShow: User[];
  p: number;
  UserFilter: string;
  
  constructor(private services: ShareService, private location: Location) {
  }

  ngOnInit() {
    this.ListOfUserToShow = this.services.ListOfUsers;
  }

  Delete(idUser: number) {
    let OldLengthOfList=this.services.ListOfUsers.length;
    console.log(OldLengthOfList);
    let index = this.services.ListOfUsers.findIndex(d => d.ID == idUser);
    this.services.ListOfUsers.splice(index, 1);
    console.log(this.services.ListOfUsers);
    let NewLenghtOfList=this.services.ListOfUsers.length;
    console.log(NewLenghtOfList);
    if(NewLenghtOfList==OldLengthOfList-1)

   { alert('SUCCESS!! :-');}
   else
   {
    alert('Failur!! :-');
   }
  }

  goBack() {
    this.location.back();
  }

}
