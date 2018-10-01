import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  public authService: AuthServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewCanEnter() {
    return this.authService.authenticated();
  }
}
