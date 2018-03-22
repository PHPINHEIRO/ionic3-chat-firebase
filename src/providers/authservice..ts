import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState } from "angularfire2";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(
    public auth: AngularFireAuth
  ) {
    console.log('Hello AuthProvider Provider');
  }

  createAuthUser(user:{email:string, password: string }):firebase.Promise<FirebaseAuthState>{
    return this.auth.createUser(user);
  }

}
