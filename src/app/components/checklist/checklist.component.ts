import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  hazards = [
    {
      title: 'Flooding',
      clicked: false,
    },
    {
      title: 'Liquifaction',
      clicked: false,
    },
    {
      title: 'Exposed cables',
      clicked: false
    },
    {
      title: 'Cracked ground',
      clicked: false,
    },
    {
      title: 'Unstable structure',
      clicked: false,
    },
  ];

  assistance = [
    {
      title: 'Ambulance',
      clicked: false,
    },
    {
      title: 'Police',
      clicked: false,
    },
    {
      title: 'Fire',
      clicked: false
    },
  ];
  general = [
    {
      title: 'No people at the location.',
    },
    {
      title: 'Power was turned off.',
    },
    {
      title: 'Water was turned off.',
    },
    {
      title: 'No pets were seen.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleClick(hazard) {
    hazard.clicked = !hazard.clicked;
  }
}
