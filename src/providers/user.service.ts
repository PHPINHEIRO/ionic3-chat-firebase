import { AngularFireModule, AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';


import { Toast, ToastController } from 'ionic-angular';
import { User } from '../models/user.model';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(
    public af: AngularFire
  ) {
    
  }

  create(user: User): firebase.Promise<void> {
    return this.af.database.list(`/users/`)
      .push(user)
}

}
