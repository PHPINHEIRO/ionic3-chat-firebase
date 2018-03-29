import { ChatPage } from './../chat/chat';
import { UserService } from './../../providers/user.service';
import { User } from './../../models/user.model';
import { FirebaseListObservable } from 'angularfire2';
import { AuthService } from './../../providers/authservice.';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<User[]>
  view: string = 'Chats'

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public userService: UserService
  ) {

  }

  ionViewCanEnter(): Promise<boolean>{
   return this.authService.authenticated
  }

  ionViewDidLoad(){
   this.users = this.userService.users
  }

  onChatCreate(user: User): void{
    console.log('usuario clicado: ',user)

    this.navCtrl.push(ChatPage,{
      recipientUser: user
    })
  }
   
  public onSignup():void{
    this.navCtrl.push(SignupPage); //chama uma page
  }




}
