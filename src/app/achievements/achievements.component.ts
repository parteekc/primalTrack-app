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
        document.getElementById('status').innerHTML = 'Gyroscope <br> x: ' + e.target.x 
                  + '<br> y: ' + e.target.y 
                  + '<br> z: ' + e.target.z;
        // console.log("sensor ststus ",status.innerHTML);        
      });
      sensor.start();
    }
    else
    document.getElementById('status').innerHTML = 'Gyroscope Not supported';
  }

  startAcc(){  
    if ( 'Accelerometer' in window ) {
      let sensor = new window.Accelerometer();
      sensor.addEventListener('reading', function(e) {
        document.getElementById('status').innerHTML = 'Accelerometer <br> x: ' + e.target.x + ' y: ' + e.target.y + ' z: ' + e.target.z;
        console.log(e.target);
      });
      sensor.start();
    }
    else{
      document.getElementById('status').innerHTML = 'Accelerometer Not supported';
    }
  }

  startAmbien(){
    if ( 'AmbientLightSensor' in window ) {
      let sensor = new window.AmbientLightSensor();
      alert('b4 event listener');
    
      sensor.addEventListener('reading', function(e) {
        alert('in event listener');
        document.getElementById('status').innerHTML = 'AmbientLightSensor <br> ' + e.target.illuminance;
        console.log(e.target.illuminance);
    
        let lux = e.target.illuminance;
        console.log('L:', lux.map(0,500,0,255));
        let val = lux.map(0,500,0,255);
        document.body.style.backgroundColor = 'rgb('+val+','+val+','+val+')';   
      });
      sensor.start();
    }
    else{
      document.getElementById('status').innerHTML = 'AmbientLightSensor Not supported';      
    }
  }

  startMagno(){
    if ( 'Magnetometer' in window ) {
      let sensor = new window.Magnetometer();
      sensor.addEventListener('reading', function(e) {
        document.getElementById('status').innerHTML = 'Magnetometer <br> x: ' + e.target.x + ' y: ' + e.target.y + ' z: ' + e.target.z;
      });
      sensor.start();
    }
    else{
      document.getElementById('status').innerHTML = 'Magnetometer Not supported';      
    }
  }

  startMagno2(){
    if ( 'Magnetometer' in window ) {
      var sensor = new window.Magnetometer();
      sensor.addEventListener('reading', function(e) {
        let heading = Math.atan2(e.target.y, e.target.x) * (180 / Math.PI);
        document.getElementById('status').innerHTML = 'Magnetometer <br> Heading in degrees: ' + heading;
      });
      sensor.start();
    }
    else{
      document.getElementById('status').innerHTML = 'Magnetometer Not supported';      
    }
  }



}
