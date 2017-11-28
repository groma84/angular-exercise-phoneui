import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial-number',
  templateUrl: './dial-number.component.html',
  styleUrls: ['./dial-number.component.scss']
})
export class DialNumberComponent implements OnInit {
  dialedNumber: string;

  constructor() {
    this.dialedNumber = '';
  }

  ngOnInit() {}

  onBackspaceClicked() {
    if (this.dialedNumber.length) {
      if (this.dialedNumber.length === 1) {
        this.dialedNumber = '';
      } else {
        this.dialedNumber = this.dialedNumber.substring(0, this.dialedNumber.length - 1);
      }
    }
  }

  onNumberClicked(num) {
    this.dialedNumber += num;
  }
}
