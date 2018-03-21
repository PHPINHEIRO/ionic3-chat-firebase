import { AngularFireModule } from 'angularfire2';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from "angularfire2/database";

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {



  constructor(
    public http: HttpClient,
    public db: AngularFireDatabase
  ) {
    console.log('Hello UserProvider Provider');
  }

}
