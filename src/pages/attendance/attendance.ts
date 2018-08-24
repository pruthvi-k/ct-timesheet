import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
// import { DatePicker } from '@ionic-native/date-picker'

/**
 * Generated class for the AttendancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance',
  templateUrl: 'attendance.html',
})
export class AttendancePage {
  today: string;
  userData: any = {};
  attendance: string
  attendanceOptions = [
    {
      "key": "Present",
      "value": "P"
    },
    {
      "key": "Personal Leave",
      "value": "PL"
    },
    {
      "key": "Work from home",
      "value": "WFH"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.today = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttendancePage');
  }

  onSubmit() {
    this.userData = {
      "date": this.today,
      "attendanceCode": this.attendance,
    }

    alert(JSON.stringify(this.userData));
  }
}
