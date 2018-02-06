import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MenuRestaurantePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-restaurante',
  templateUrl: 'menu-restaurante.html',
})
export class MenuRestaurantePage {
  public restaurantId;
  public restaurantName;
  data: Array<{title: string, details: string, icon: string, showDetails: boolean}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.restaurantId = navParams.get("restaurantId");
    this.restaurantName = navParams.get("restaurantName");
    for(let i = 0; i < 2; i++ ){
      this.data.push({
          title: 'Hamburguesas',
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'ios-add-circle-outline',
          showDetails: false
        });
    }
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-add-circle-outline';
    } else {
        data.showDetails = true;
        data.icon = 'ios-remove-circle-outline';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuRestaurantePage');
  }
  // Funcion opcional para navegar a la pagina anterior
  goBack() {
    console.log("popping");
    this.navCtrl.pop();
  }
}
