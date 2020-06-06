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

    let status = document.getElementById('status');
    if ( 'Gyroscope' in window ) {
      
      let sensor = new window.Gyroscope();
      console.log("sensor ", sensor);
      sensor.addEventListener('reading', function(e) {
        status.innerHTML = 'x: ' + e.target.x + '<br> y: ' + e.target.y + '<br> z: ' + e.target.z;
        console.log("sensor ststus ",status.innerHTML);        
      });
      sensor.start();
    }
    else status.innerHTML = 'Gyroscope not supported';

  }

}
