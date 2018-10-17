import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CcrbPage } from '../ccrb/ccrb';
import { ImsbPage } from '../imsb/imsb';

/**
 * Generated class for the RecsportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-recsports',
  templateUrl: 'recsports.html',
})

export class RecsportsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecsportsPage');
  }

  public openCCRB(){
    this.navCtrl.push(CcrbPage);
  }

  public openIMSB(){
    this.navCtrl.push(ImsbPage);
  }

}
