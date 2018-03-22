import { UserService } from './../../providers/user.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

   signupForm: FormGroup;

  constructor(
    public userService: UserService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder : FormBuilder
  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({

      name: ['', [Validators.required, Validators.minLength(3)]],
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
  
    });
  }

  public onSubmit():void{
    
    this.userService.create(this.signupForm.value,).then(
      () => {
        console.log("usiario cadrastrado consucesso")
      }
    )
  }

}
