import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState } from "angularfire2";
import { BaseService } from './base.service';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/first'

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService extends BaseService{

  constructor(
    public auth: AngularFireAuth,
    public firebaseAuth: AngularFireAuth
  ) {
    super()
  }

  createAuthUser(user:{email:string, password: string }):firebase.Promise<FirebaseAuthState>{
    return this.auth.createUser(user).catch(this.handlePromiseError);
  }

  signinWithEmail(user: {email: string, password: string}): firebase.Promise<boolean>{
    return this.auth.login(user)
      .then((authState: FirebaseAuthState) => {
        return authState != null
      }).catch(this.handlePromiseError)
  }

  logout():Promise<void>{
    return this.auth.logout()
  }


  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth
          .subscribe((authState:FirebaseAuthState) => {
            (authState) ? resolve(true) : reject(false);
          })
      // this.firebaseAuth.authState
      //   .first()
      //   .subscribe((authState: firebase.User) => {
      //      (authState) ? resolve(true) : reject(false);
      //   });
      });
  }

}
