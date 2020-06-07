import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

declare let window: any;
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  gyroSensor;
  accSensor;
  ambienSensor;
  magnosensor;
  magno2sensor;

  constructor(public location: Location) { 
    document.title = "Achievements";
  }

  ngOnInit() {

  }

  startGyro(){
    if ( 'Gyroscope' in window ) {
      this.gyroSensor = new window.Gyroscope();
      // console.log("sensor ", sensor);
      this.gyroSensor.addEventListener('reading', function(e) {
        document.getElementById('status').innerHTML = 'Gyroscope <br> x: ' + e.target.x 
                  + '<br> y: ' + e.target.y 
                  + '<br> z: ' + e.target.z;
        // console.log("sensor ststus ",status.innerHTML);        
      });
      this.gyroSensor.start();
    }
    else
    document.getElementById('status').innerHTML = 'Gyroscope Not supported';
  }

  startAcc(){  
    if ( 'Accelerometer' in window ) {
      this.accSensor = new window.Accelerometer();
      this.accSensor.addEventListener('reading', function(e) {
        document.getElementById('status').innerHTML = 'Accelerometer <br> x: ' + e.target.x + ' y: ' + e.target.y + ' z: ' + e.target.z;
        console.log(e.target);
      });
      this.accSensor.start();
    }
    else{
      document.getElementById('status').innerHTML = 'Accelerometer Not supported';
    }
  }

  startAmbien(){
    if ( 'AmbientLightSensor' in window ) {
      this.ambienSensor = new window.AmbientLightSensor();
      alert('b4 event listener');
    
      this.ambienSensor.addEventListener('reading', function(e) {
        alert('in event listener');
        document.getElementById('status').innerHTML = 'AmbientLightSensor <br> ' + e.target.illuminance;
        console.log(e.target.illuminance);
    
        let lux = e.target.illuminance;
        console.log('L:', lux.map(0,500,0,255));
        let val = lux.map(0,500,0,255);
        document.body.style.backgroundColor = 'rgb('+val+','+val+','+val+')';   
      });
      this.ambienSensor.start();
    }
    else{
      document.getElementById('status').innerHTML = 'AmbientLightSensor Not supported';      
    }
  }

  startMagno(){
    if ( 'Magnetometer' in window ) {
      this.magnosensor = new window.Magnetometer();
      this.magnosensor.addEventListener('reading', function(e) {
        document.getElementById('status').innerHTML = 'Magnetometer <br> x: ' + e.target.x + ' y: ' + e.target.y + ' z: ' + e.target.z;
      });
      this.magnosensor.start();
    }
    else{
      document.getElementById('status').innerHTML = 'Magnetometer Not supported';      
    }
  }

  startMagno2(){
    if ( 'Magnetometer' in window ) {
      this.magno2sensor = new window.Magnetometer();
      this.magno2sensor.addEventListener('reading', function(e) {
        let heading = Math.atan2(e.target.y, e.target.x) * (180 / Math.PI);
        document.getElementById('status').innerHTML = 'Magnetometer <br> Heading in degrees: ' + heading;
      });
      this.magno2sensor.start();
    }
    else{
      document.getElementById('status').innerHTML = 'Magnetometer Not supported';      
    }
  }

  stopAll(){
    this.accSensor.stop();
    this.ambienSensor.stop();
    this.magno2sensor.stop();
    this.magnosensor.stop();
    this.gyroSensor.stop();
  }



}
