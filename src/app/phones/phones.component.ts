import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
brand: string
model: any
ram: any
display: any
color: []
battarey: any
wireles:[]

  constructor() {
    
   }

  ngOnInit():void {
this.brand = "Samsung";
this.model = "Z12345"
this.ram = "4096MB"
this.display = "IPS"
this.color = ["red", "black", "blue"]
this.battarey = "5000mah"
this.wireles = ["Bluetooth", "NFS", "WiFi"]
   }
   samsung(){
    this.brand = "Samsung"
    this.model = "Z12345"
    this.ram = "4096MB"
    this.display = "IPS"
    this.color = ["red", "black", "blue"]
    this.battarey = "5000mah"
    this.wireles = ["Bluetooth", "NFS", "WiFi"]
  };

iphone(){
    this.brand = "Iphone"
    this.model = "10"
    this.ram = "4096MB"
    this.display = "IPS"
    this.color = ["red", "black", "blue"]
    this.battarey = "5000mah"
    this.wireles = ["Bluetooth", "NFS", "WiFi"]
  }
  xiaomi(){
    this.brand = "Xiaomi"
    this.model = "redmi"
    this.ram = "4096MB"
    this.display = "IPS"
    this.color = ["red", "black", "blue"]
    this.battarey = "5000mah"
    this.wireles = ["Bluetooth", "NFS", "WiFi"]
  }
  zte(){
    this.brand = "ZTE"
    this.model = "qwerty"
    this.ram = "4096MB"
    this.display = "IPS"
    this.color = ["red", "black", "blue"]
    this.battarey = "5000mah"
    this.wireles = ["Bluetooth", "NFS", "WiFi"]
  }
  
 

}


