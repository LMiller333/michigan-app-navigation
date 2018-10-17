import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NorthquadPage } from '../northquad/northquad';

/**
 * Generated class for the DiningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dining',
  templateUrl: 'dining.html',
})
export class DiningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiningPage');
  }

  openNorthQuad(){
    this.navCtrl.push(NorthquadPage);
  }

}
