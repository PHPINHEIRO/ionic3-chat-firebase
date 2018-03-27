import { HomePage } from './../home/home';
import { AuthService } from './../../providers/authservice.';
import { UserService } from './../../providers/user.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirebaseAuthState } from 'angularfire2';

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
    public authService: AuthService,
    public userService: UserService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toast: ToastController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({

      name: ['', [Validators.required, Validators.minLength(3)]],
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],

    });
  }

  public onSubmit(): void {

    let loading: Loading = this.showLoading();
    let formUser = this.signupForm.value;
    let userName: string = formUser.user;
    console.log(userName) 

    this.userService.userExists(userName)
      .first()
      .subscribe((userExists: boolean) => {
        if (!userExists) {
          this.authService.createAuthUser({

            email: formUser.email,
            password: formUser.password

          }).then((authState: FirebaseAuthState) => {

            delete formUser.password
            let uuid: string = authState.auth.uid
            this.userService.create(this.signupForm.value,uuid).then(
              () => {

                this.toast.create({
                  message: 'Usuario criado com sucesso',
                  duration: 3000

                }).present()
                loading.dismiss()
                this.navCtrl.setRoot(HomePage)
              }).catch((error: any) => {
                loading.dismiss()
                this.showAlert(error)
              })
          }).catch((error: any) => {
            loading.dismiss()
            this.showAlert(error)
          })

        } else {
          this.showAlert(`O nome de Usuario ${userName} ja esta sendo usando, favor informar outro.`)
          loading.dismiss()
        }
      })
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



}
