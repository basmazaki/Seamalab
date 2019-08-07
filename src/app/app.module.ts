import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowUSersComponent } from './UserDetails/Components/ShowUSers/show-users/show-users.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AddUserComponent } from './UserDetails/Components/AddUser/add-user/add-user.component';
import { HeaderComponent } from './UserDetails/Components/LayoutComponents/Header/header/header.component';
import { ContentComponent } from './UserDetails/Components/LayoutComponents/Content/content/content.component';
import { FooterComponent } from './UserDetails/Components/LayoutComponents/Footer/footer/footer.component'; 
import {FormsModule} from '@angular/forms';
import { UpdateUserComponent } from './UserDetails/Components/UpdateUSer/update-user/update-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserFilterPipe } from './UserDetails/Components/ShowUSers/show-users/User.Filter.Pipe';
import { ViewListOfUserComponent } from './UserPart/ShowListOfUsers/view-list-of-user/view-list-of-user.component';
import { LogInComponent } from './UserDetails/Components/log-in/log-in.component';
import { DefaultComponent } from './UserDetails/Components/LayoutComponents/DefaultPage/default/default.component';
@NgModule({
  declarations: [
    AppComponent,
    ShowUSersComponent,
    AddUserComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    UpdateUserComponent,
    UserFilterPipe,
    ViewListOfUserComponent,
    LogInComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    
    
  ],
  providers: [
   // Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
