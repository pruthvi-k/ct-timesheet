import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider, public alertCtrl: AlertController) {
  }

  nextPage() {
    this.navCtrl.push('AttendancePage').catch(err=>{
		console.log('error', err);
      let alert = this.alertCtrl.create({
        title: 'No Entry',
        buttons: ['Ok']
      })
	  alert.present();
    })
	
	
  }

  loginUser() {
    this.authService.login();
	this.nextPage();
  }

  isAuthenticated() {
    return this.authService.authenticated();
  }

}
