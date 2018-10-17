import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { ENV } from '@app/env';
//import { AttendancePage } from '../../pages/attendance/attendance';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginUrl: String;
  client_id: String = ENV.client;
  scope: String = ENV.scope;
  redirect_uri: String = ENV.redirect_uri;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public alertCtrl: AlertController) {
    this.loginUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${this.client_id}&scope=${this.scope}&response_type=token&redirect_uri=${this.redirect_uri}`;
  }

  nextPage() {
    this.navCtrl.setRoot('AttendancePage').catch(err=>{
		console.log('error', err);
      let alert = this.alertCtrl.create({
        title: 'No Entry',
        buttons: ['Ok']
      })
	  alert.present();
    })
    this.navCtrl.popToRoot();
	
	
  }

  loginUser() {
    this.authService.login();
	this.nextPage();
  }

  isAuthenticated() {
    return this.authService.authenticated();
  }

}
