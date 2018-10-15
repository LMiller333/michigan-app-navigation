import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-widgets',
  templateUrl: 'widgets.html'
})


export class WidgetsPage {

  constructor(
    public navCtrl: NavController
  ) { }
  
    goBack(){
        this.navCtrl.pop();
    }
}