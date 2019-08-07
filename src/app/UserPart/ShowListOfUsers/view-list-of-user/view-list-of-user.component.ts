import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/UserDetails/ViewModels/user';
import { ShareService } from 'src/app/share.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-list-of-user',
  templateUrl: './view-list-of-user.component.html',
  styleUrls: ['./view-list-of-user.component.css']
})
export class ViewListOfUserComponent implements OnInit {
  ListOfUserToShow: User[];
  p: number;
  UserFilter: string;
  constructor(private location: Location, private services: ShareService) { }

  ngOnInit() {
    this.ListOfUserToShow = this.services.ListOfUsers;
  }

  goBack() {
    this.location.back();
  }

}
