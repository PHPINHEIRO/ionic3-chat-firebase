import { Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core'; 
import { User } from '../models/user.model';
import { BaseService } from './base.service';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() 
export class UserService extends BaseService{

  users: FirebaseListObservable<User[]>

  constructor(
    public af: AngularFire
  ) {
    super();
    this.users = this.af.database.list(`/users`)
    
  }

  create(user: User,uuid: string): firebase.Promise<void> {
    return this.af.database.object(`users/${uuid}`)
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
