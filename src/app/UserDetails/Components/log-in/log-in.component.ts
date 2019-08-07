import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
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
