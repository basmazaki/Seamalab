import { PipeTransform, Pipe } from '@angular/core';
import { User } from 'src/app/UserDetails/ViewModels/user';
@Pipe(
    {
        name:'UserFilter'
    }
)

export class UserFilterPipe implements PipeTransform
{
    transform(ListOfUserToShow:User[],UserFilter: string):User[] {
      if(!ListOfUserToShow || !UserFilter)
      
      {
          return ListOfUserToShow;
      }
      return ListOfUserToShow.filter(User=>User.Name.toLowerCase().indexOf(UserFilter.toLowerCase())!==-1);
    }

}