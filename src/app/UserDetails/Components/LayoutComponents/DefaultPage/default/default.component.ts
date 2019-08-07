import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  UserName:string;
  Password:string;
  constructor(private router: Router) {
    this.UserName='',
    this.Password=''
   }

  ngOnInit() {
  }
  LogIn()
  {
    if(this.UserName=="basma@user.com" && this.Password=='123456' )
    {
      this.router.navigate(['/User'])
    }
    if(this.UserName=="basma@admin.com" && this.Password=='123456' ){
      this.router.navigate(['/Admin'])
    }
  }
}
