import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor(public location: Location ) { 
    document.title= "Connection";
  }

  ngOnInit() {
    console.log("on init connection");
  }

}
