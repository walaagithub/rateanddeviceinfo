import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';



//import for rate
import { Ionic2RatingModule } from "ionic2-rating";

   //device info
interface deviceInterface {
  id?: string,
  model?: string,
  cordova?: string,
  platform?: string,
  version?: string,
  manufacturer?: string,
  serial?: string,
  isVirtual?: boolean,
 
};
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {

//rate 
  rate : any = 0;

  //device info
  public deviceInfo: deviceInterface = {};
  constructor(public navCtrl: NavController, private device: Device) {
 
  }
  //device info
  onModelChange(event){
    this.rate = event;
    console.log(event);
    }


      //device info
  getInfo() {
    this.deviceInfo.id = this.device.uuid;
    this.deviceInfo.model = this.device.model;
    this.deviceInfo.cordova = this.device.cordova;
    this.deviceInfo.platform = this.device.platform;
    this.deviceInfo.version = this.device.version;
    this.deviceInfo.manufacturer = this.device.manufacturer;
    this.deviceInfo.serial = this.device.serial;
    this.deviceInfo.isVirtual = this.device.isVirtual;
  }
}