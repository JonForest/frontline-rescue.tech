import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hazards',
  template: `
    <app-header title="Hazards"></app-header>
    <div style="min-height:86vh">
      <h3>Flooding</h3>
      Possible contiminants in the water.
    </div>
    <div>
      <button class="btn pull-right btn-std">Identify Hazard</button>
    </div>
  `,
  styles: []
})
export class HazardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
