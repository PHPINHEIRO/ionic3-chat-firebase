import { FirebaseAppConfig, AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';


import { SignupPageModule } from './../pages/signup/signup.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthService } from '../providers/authservice.';
import { UserService } from '../providers/user.service';
import { SigninPageModule } from '../pages/signin/signin.module';
 



/* variaveis de configuracoes do firebase */
const fireBaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyDf_v-H9cAJqpUi8eAk9YlcTVgJUVDY_nU",
    authDomain: "ionic3-firebase-chat-78f7d.firebaseapp.com",
    databaseURL: "https://ionic3-firebase-chat-78f7d.firebaseio.com",
    storageBucket: "ionic3-firebase-chat-78f7d.appspot.com",
  };


const fireBaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    AngularFireModule.initializeApp(fireBaseAppConfig,fireBaseAuthConfig), // inicializa o firebase
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SignupPageModule, //import da page, faz pra todas.
    SigninPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    AuthService,    
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AuthService
  ]
})
export class AppModule {}
