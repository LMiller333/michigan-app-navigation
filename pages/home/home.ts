import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';
import { WidgetsPage } from '../widgets/widgets';
import { RecsportsPage } from '../recsports/recsports';
import { DiningPage } from '../dining/dining';
import { CcrbPage } from '../ccrb/ccrb';
import { GreenehooverPage } from '../greenehoover/greenehoover';
import { NorthquadPage} from '../northquad/northquad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    // public alerCtrl: AlertController
  ) { }

  public goToWidgets() {
    this.navCtrl.push(WidgetsPage);
  }

  public goToRecSports() {
    this.navCtrl.push(RecsportsPage);
  }

  public goToDining(){
    this.navCtrl.push(DiningPage);
  }

  public goToCCRB(){
    this.navCtrl.push(CcrbPage);
  }

  public goToGreeneHoover(){
    this.navCtrl.push(GreenehooverPage);
  }

  public goToNorthQuad(){
    this.navCtrl.push(NorthquadPage);
  }



  // doAlert() {
  //   let alert = this.alerCtrl.create({
  //     title: 'Did You Know?',
  //     message: '<p>Magic Bus by DoubleMap is also available as an app. Would you like to download the app?</p><p>We won\'t ask you again.</p>',
  //     buttons: [
  //       {
  //         text: 'Download the App',
  //         handler:() => {
  //           console.log('Go to app/store');
  //         }
  //       },
  //       {
  //         text: 'Continue to Magic Bus',
  //         handler:() => {
  //           console.log('Continue to MBus Classic');
  //         }
  //       }
  //     ]
  //   });
  //   alert.present()
  // }

}