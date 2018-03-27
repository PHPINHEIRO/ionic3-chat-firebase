import { AuthService } from './../../providers/authservice.';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
  ) {

  }

  ionViewCanEnter(): Promise<boolean>{
   return this.authService.authenticated
  }
   
  public onSignup():void{
    this.navCtrl.push(SignupPage); //chama uma page
  }



}
