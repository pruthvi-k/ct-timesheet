import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the MusterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muster',
  templateUrl: 'muster.html',
})
export class MusterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
  }

  ionViewCanEnter() {
    return this.authService.authenticated();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MusterPage');
  }

}
