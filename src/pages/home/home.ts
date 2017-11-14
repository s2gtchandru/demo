import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor() { this.initializeItems(); }
    
  initializeItems() {
    this.items = [
      'Chandru',
      'Chandraa',
      'Murali',
      'Prasanth'
     
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  
  
  
}
