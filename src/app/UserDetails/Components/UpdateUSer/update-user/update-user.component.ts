import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/UserDetails/ViewModels/user';
import { ShareService } from 'src/app/share.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  UserUpdate: User;
  newUser: User;
  constructor(private Activated_Route: ActivatedRoute, private services: ShareService, private location: Location, private router: Router) {
    this.UserUpdate = new User();
    this.newUser = new User();
  }

  ngOnInit() {
    const selectedUserID = this.Activated_Route.snapshot.params['ID'];
    this.UserUpdate = this.services.ListOfUsers.find(
      function (element) {
        return element.ID == selectedUserID;
      }
    );
    console.log(this.UserUpdate);
    console.log(this.services.ListOfUsers);
  }


  onSubmit(idUser: number) {
    console.log(idUser);
    console.log(this.services.ListOfUsers);
    let index = this.services.ListOfUsers.findIndex(d => d.ID == idUser);
    this.services.ListOfUsers[index] = this.UserUpdate;
    alert("SUCCESS!!");
    this.router.navigate(['\Admin']);
  }

  goBack() {
    this.location.back();
  }
}

