import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  pinNumber: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.pinNumber = Math.floor(1000+Math.random() * 9000);
   
  }


}


