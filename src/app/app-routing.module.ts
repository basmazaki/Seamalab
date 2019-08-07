import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUserComponent } from './UserDetails/Components/AddUser/add-user/add-user.component';
import { ShowUSersComponent } from './UserDetails/Components/ShowUSers/show-users/show-users.component';
import { UpdateUserComponent } from './UserDetails/Components/UpdateUSer/update-user/update-user.component';
import { LogInComponent } from './UserDetails/Components/log-in/log-in.component';
import { ViewListOfUserComponent } from './UserPart/ShowListOfUsers/view-list-of-user/view-list-of-user.component';
import { DefaultComponent } from './UserDetails/Components/LayoutComponents/DefaultPage/default/default.component';

const routes: Routes = [
  {path: 'Admin', component:ShowUSersComponent}
  , {path: 'Add', component:AddUserComponent}
   , {path: 'Update/:ID', component:UpdateUserComponent}
   , {path: 'Default', component: DefaultComponent}
  , {path: 'LogIn', component: LogInComponent}
  , {path: 'User', component: ViewListOfUserComponent}
  , {path: '', redirectTo: '/Default', pathMatch: 'full'}
  //, {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
