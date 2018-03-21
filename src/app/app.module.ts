
import { SignupPageModule } from './../pages/signup/signup.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirebaseAppConfig, AngularFireModule } from 'angularfire2';
import { UserService } from '../providers/user/user.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 



/* variaveis de configuracoes do firebase */
const fireBaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyDf_v-H9cAJqpUi8eAk9YlcTVgJUVDY_nU",
    authDomain: "ionic3-firebase-chat-78f7d.firebaseapp.com",
    databaseURL: "https://ionic3-firebase-chat-78f7d.firebaseio.com",
    storageBucket: "ionic3-firebase-chat-78f7d.appspot.com",
    messagingSenderId: "818383347572"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SignupPageModule, //import da page, faz pra todas.
    AngularFireModule.initializeApp(fireBaseAppConfig), // inicializa o firebase
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
