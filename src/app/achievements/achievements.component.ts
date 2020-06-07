import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare let window: any;
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  
  constructor(public location: Location) { 
    document.title = "Achievements";
  }

  ngOnInit() {

  }

  startGyro(){
    if ( 'Gyroscope' in window ) {
      let sensor = new window.Gyroscope();
      // console.log("sensor ", sensor);
      sensor.addEventListener('reading', function(e) {
        document.getElementById('status').innerHTML = 'x: ' + e.target.x 
                  + '<br> y: ' + e.target.y 
                  + '<br> z: ' + e.target.z;
        // console.log("sensor ststus ",status.innerHTML);        
      });
      sensor.start();
    }
  }

  startAcc(){  
    let sensor = new window.Accelerometer();
    sensor.addEventListener('reading', function(e) {
      document.getElementById('status').innerHTML = 'x: ' + e.target.x + ' y: ' + e.target.y + ' z: ' + e.target.z;
      console.log(e.target);
    });
    sensor.start();
  }

  startAmbien(){
    let sensor = new window.AmbientLightSensor();
    
    sensor.addEventListener('reading', function(e) {
      document.getElementById('status').innerHTML = e.target.illuminance;
      console.log(e.target.illuminance);
   
      var lux = e.target.illuminance;
      console.log('L:', lux.map(0,500,0,255));
      var val = lux.map(0,500,0,255);
      document.body.style.backgroundColor = 'rgb('+val+','+val+','+val+')';   
    });
    sensor.start();
  }

  startMagno(){
    let sensor = new window.Magnetometer();
    sensor.addEventListener('reading', function(e) {
      document.getElementById('status').innerHTML = 'x: ' + e.target.x + ' y: ' + e.target.y + ' z: ' + e.target.z;
    });
    sensor.start();
  }

  startMagno2(){
    var sensor = new window.Magnetometer();
    sensor.addEventListener('reading', function(e) {
      let heading = Math.atan2(e.target.y, e.target.x) * (180 / Math.PI);
      document.getElementById('status').innerHTML = 'Heading in degrees: ' + heading;
    });
    sensor.start();
  }



}
