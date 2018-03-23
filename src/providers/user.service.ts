import { Observable } from 'rxjs';
import { AngularFireModule, AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';


import { Toast, ToastController } from 'ionic-angular';
import { User } from '../models/user.model';
import { BaseService } from './base.service';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService extends BaseService{

  constructor(
    public af: AngularFire
  ) {
    super()
    
  }

  create(user: User): firebase.Promise<void> {
    return this.af.database.object(`users/${user.uid}`)
      .set(user)
      .catch(this.handlePromiseError)
  }

  userExists(userName: string): Observable<boolean>{
    return this.af.database.list(`users/`,{
      query:{
        orderByChild: 'user',
        equalTo: userName
      }
    }).map((users:User[])=>{
      return users.length > 0
    }).catch(this.handleObservableError)
  }



}
