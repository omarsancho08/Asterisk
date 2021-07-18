import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminate-call',
  templateUrl: './terminate-call.component.html',
  styleUrls: ['./terminate-call.component.css']
})
export class TerminateCallComponent implements OnInit {
  counter: number=0;

  constructor() { }

  ngOnInit(): void {

    for (let i = 0; i < 2; i++) {
      setTimeout(() => {
        this.counter = this.counter - 1;
      }, 10)
     }
  }

}
