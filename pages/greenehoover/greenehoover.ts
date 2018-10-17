import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the GreenehooverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-greenehoover',
  templateUrl: 'greenehoover.html',
})
export class GreenehooverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreenehooverPage');
  }


  openActionSheet(){
    console.log('opening');
    let actionsheet = this.actionSheetCtrl.create({
    buttons:[{
    text: 'Remove Favorite',
    handler: () => {
    console.log("Favorite Clicked");
    }
    },
    {
      text: 'View on Map',
      handler: function(){
      console.log("Map Clicked");
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      handler: function(){
      console.log("Cancel Clicked");
      }
    }]
    });
    actionsheet.present();
   }

}
