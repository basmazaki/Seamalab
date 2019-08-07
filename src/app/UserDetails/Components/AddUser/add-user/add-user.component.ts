import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/UserDetails/ViewModels/user';
import { Location } from '@angular/common';
import { ShareService } from 'src/app/share.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser:User;
  ListOfUsers:User[]=[];
  constructor(private location: Location,private  services:ShareService,private router:Router) { 
    this.newUser=new User();
  }
  ngOnInit() {
  }
  onSubmit()
  {
    let OldLengthOfList=this.services.ListOfUsers.length;
    console.log(OldLengthOfList);
    let newUSerID=this.services.ListOfUsers.length+1;
    this.newUser.ID=newUSerID;
    console.log(this.newUser);
    this.services.ListOfUsers.push(this.newUser);
    let NewLenghtOfList=this.services.ListOfUsers.length;
    console.log(NewLenghtOfList);
    console.log(this.services.ListOfUsers);
    if(NewLenghtOfList==OldLengthOfList+1)

   { alert('SUCCESS!! :-');}
   else
   {
    alert('Failur!! :-');
   }
    this.router.navigate(['\Admin']);
    console.log("rrrrrr");

  }

  goBack() {
    this.location.back();
  }
}
