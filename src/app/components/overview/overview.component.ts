import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <div class="half-screen-map">
      <app-map></app-map>
    </div>
    <div class="height: 50%">
      This is some target info
    </div>
  `,
  styles: [
    '.half-screen-map { height: 50%}',
  ]
})
export class OverviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
