import { HomePage } from './../home/home';
import { AuthService } from './../../providers/authservice.';
import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(
    public authService: AuthService,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],

    });
  }

  onSubmit(): void {
    let loading: Loading = this.showLoading()

    this.authService.signinWithEmail(this.signinForm.value)
      .then((isLogged) => {
        if (isLogged) {
          this.navCtrl.setRoot(HomePage)
          loading.dismiss()
        }
      }).catch((error: any)=>{
        console.log(error)
        loading.dismiss()
        this.showAlert(error)
      })
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage)
  }


  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Criando conta, por favor aguarde'
    });

    loading.present()

    return loading
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present()
  }

  private onHomePage():void{
    this.navCtrl.push(HomePage).then((hasAccess: boolean)=>{
      console.log('autorizado: ',hasAccess)
    }).catch(err => {
      console.log('nao autorizado: ',err)
    })
  }  

  private onLogout(): void{
    this.authService.logout( )
  }

}
