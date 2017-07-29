import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  names = [
    {
      name: 'John Smith',
      number: '022 277 2233'
    },
    {
      name: 'Sarah Wilson',
      number: '021 432 9823'
    },
    {
      name: 'Tim Corbett',
      number: '027 133 4555'
    },
    {
      name: 'HQ',
      number: '0800 112 1198'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
