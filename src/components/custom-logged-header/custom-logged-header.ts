import { AlertController, App, MenuController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { BaseComponent } from '../base.component';
import { AuthService } from '../../providers/authservice.';

/**
 * Generated class for the CustomLoggedHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-logged-header',
  templateUrl: 'custom-logged-header.html'
})
export class CustomLoggedHeaderComponent extends BaseComponent{

  @Input() title: string

  constructor(

    public alertCtrl: AlertController,
    public authServe: AuthService,
    public app: App,
    public menuCtrl: MenuController

){
    super(alertCtrl,authServe,app,menuCtrl);
  }

}
