import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VerPage } from '../ver/ver';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ver= VerPage;
  favoritos = FavoritosPage;
  carrito=[];

  casas=[
    {
      id:0,
      nombre: "Emeterio Robles",
      imagen: "..//assets/imgs/cero.jpg",
      precio: " 7´800,000 pesos",
      zona: "Casa en venta en Gran Reforma",
      recamaras: "7",
      banos: "4",
      metros: "350 mts"
    },
    {
      id:1,
      nombre: "Paulo Rodriguez",
      imagen: "..//assets/imgs/uno.jpg",
      precio: " 2´400,000 pesos",
      zona: "Lomas de Paradero",
      recamaras: "2",
      banos: "2",
      metros: "255 mts"
    },
    {
      id:2,
      nombre: "Aurelio Gallardo",
      imagen: "..//assets/imgs/dos.jpg",
      precio: "12´010,000 pesos",
      zona: "Casa en Bugambilias Primera Seccion",
      banos: "5",
      recamaras: "4",
      metros: "445 mts"
    },
    {
      id:3,
      nombre: "Aracelli Luna",
      imagen: "..//assets/imgs/tres.jpg",
      precio: " 5´000,000",
      zona: "Casa en Ladron de Guevara",
      banos: "3",
      recamaras: "4",
      metros: "212 mts"
    },
    {
      id:4,
      nombre: "Nicolas Heredia",
      imagen: "..//assets/imgs/cuatro.jpg",
      precio: " 6´500,000 pesos",
      zona: "Casa en Bugambilias Segunda Seccion",
      banos: "4",
      recamaras: "3",
      metros: " 520 mts"
    },
    {
      id:5,
      nombre: "Vanessa Cortes",
      imagen: "..//assets/imgs/cinco.jpg",
      precio: " 4´590,000 pesos",
      zona: "Bugambilias Segunda Seccion",
      banos: "3",
      recamaras: "3",
      metros: "442 mts"
    },
    {
      id:6,
      nombre: "Anely Hermosillo",
      imagen: "..//assets/imgs/seis.jpg",
      precio: " 17´900,000 pesos",
      zona: "Casa en Azaleas, Zapopan",
      banos: "6",
      recamaras: "5",
      metros: "1,052 mts"
    },
    {
      id:7,
      nombre: "Omar Osorio",
      imagen: "..//assets/imgs/siete.jpg",
      precio: " 5´500,000 pesos",
      zona: "Casa en venta La Rioja",
      recamaras: "3",
      banos: "4",
      metros: "249 mts"
    },
    {
      id:8,
      nombre: "Antonio Ulloa",
      imagen: "..//assets/imgs/ocho.jpg",
      precio: " 26´000,000 pesos",
      zona: "Tlaquepaque Zona Centro",
      recamaras: "5",
      banos: "6",
      metros: "820 mts"
    },
    {
      id:9,
      nombre: "Valerio Quiroz",
      imagen: "..//assets/imgs/diez.jpg",
      precio: " 17´500,000 pesos",
      zona: "Casa en Valle Real",
      recamaras: "3",
      banos: "3",
      metros: "510 mts"
    },

  ]

  constructor(public navCtrl: NavController) {

  }
  clickver(c){
    this.navCtrl.push(this.ver,{producto:c, carrito:this.carrito});
  }
  clickmostrar(){
    this.navCtrl.push(this.favoritos, {carrito: this.carrito});
  }
 
}
