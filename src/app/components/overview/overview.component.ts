import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  public address;

  constructor() {
  }

  ngOnInit() {
    this.address = '16 Bank Street Blenheim';
  }

  setAddress(pAddress) {
    this.address = pAddress;
  }

}
