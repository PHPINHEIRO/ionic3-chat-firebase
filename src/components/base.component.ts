import { NavController, AlertController, App, MenuController } from 'ionic-angular';
import { AuthService } from '../providers/authservice.';
import { OnInit } from '@angular/core';
import { SigninPage } from '../pages/signin/signin';


export abstract class BaseComponent implements OnInit{

    protected navCtrl: NavController

    constructor(

        public alertCtrl: AlertController,
        public authServe: AuthService,
        public app: App,
        public menuCtrl: MenuController

    ){}

    ngOnInit(): void{
        this.navCtrl = this.app.getActiveNav()
    }

    onLogout(): void{
        this.alertCtrl.create({
            message: "Deseja realmente sair ?",
            buttons: 
                    [
                        {
                            text: 'Sim',
                            handler: () => { 
                                this.authServe.logout().then(()=>{
                                    this.navCtrl.setRoot(SigninPage)
                                })
                            }
                        },
                        {
                            text: 'Nao'
                        }
                    ]
        }).present()
    }

    
}