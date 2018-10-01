import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

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
    this.navCtrl.push('Home').catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'No Entry',
        buttons: ['Ok']
      })
    })
  }

  loginUser() {
    this.authService.login();
  }

  isAuthenticated() {
    return this.authService.authenticated();
  }

}
