import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {
  messages = [
    {
      title: 'Team B encountered severe flouding on their way to their first area, so had to take an alternative route.'
    },
    {
      title: 'Team A have come across June Little from the missings persons list.'
    },
  ];

  text = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  setValueClass() {
    return !!this.text.value;
  }

  postComment() {
    if (this.text.value) {
      this.messages.push({title: this.text.value});
      this.text.setValue('');
    }
  }

}
