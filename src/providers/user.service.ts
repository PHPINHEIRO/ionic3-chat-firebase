import { AngularFireModule } from 'angularfire2';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from "angularfire2/database";
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
    public db: AngularFireDatabase
  ) {
    
  }

  create(user: User, uuid: string): Promise<void> {
    return this.db.object(`/users/${uuid}`)
      .set(user)
      .catch();
}

}
