import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   constructor(public alerCtrl: AlertController) { }
    
  display() {
    let alert = this.alerCtrl.create({
      title: 'Login',
      message: 'Login Success...',
      buttons: ['Ok']
    });
    alert.present();
  }
  
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }
    
}
