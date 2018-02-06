import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuRestaurantePage } from './menu-restaurante';

@NgModule({
  declarations: [
    MenuRestaurantePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuRestaurantePage),
  ],
})
export class MenuRestaurantePageModule {}
