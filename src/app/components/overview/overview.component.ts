import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <div class="half-screen-map">
      <app-map (currentAddress)="setAddress($event)"></app-map>
    </div>
    <div class="address">
      {{address}}
      <button class="btn pull-right" routerLink="/checklist" routerLinkActive="active">Checklist</button>
    </div>
  `,
  styles: [
    '.half-screen-map { height: 645px}',
    '.address {padding: 15px;}'
  ]
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
