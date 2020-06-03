import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-report',
  templateUrl: './health-report.component.html',
  styleUrls: ['./health-report.component.css']
})
export class HealthReportComponent implements OnInit {

  constructor() { 
    document.title = "Report";
  }

  ngOnInit() {
  }

}
