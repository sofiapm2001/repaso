import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver',
  templateUrl: 'ver.html',
})
export class VerPage {
  nombre= '';
  imagen= '';
  recamaras= '';
  baños= '';
  metros='';
  zona='';
  precio = '';
  producto ='';
  favoritos='';
  casas='';
  carrito= [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.producto=this.navParams.get('producto');
    this.carrito=this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerPage');
  }
  clickfavoritos(){
    this.carrito.push(this.producto); 
  }

  Agregar(){
    this.carrito.push(
      this.producto);
      this.navCtrl.pop();

  }

}
