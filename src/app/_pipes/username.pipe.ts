import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value, users): string {

    if (!value || !users) return null;

    for (let i = 0; i < users.length; i++) {
        if (users[i]._id === value) return users[i].username;
    }

    return null;
  }
}
