import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MapService} from '../../services/map.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-diections',
  templateUrl: './diections.component.html',
  styleUrls: ['./diections.component.css']
})
export class DiectionsComponent implements OnInit {
  public maneuvers = [];
  @Output() finishedNavEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private mapService: MapService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.calcRoute();
  }

  calcRoute() {
    const latLngStart = this.mapService.basePosition.join();
    const latLngEnd = this.mapService.positionArray[0].join();
    const url = 'https://route.cit.api.here.com/routing/7.2/calculateroute.json?app_id=itWl7z9WHWl48Kvv2zYy' +
      '&app_code=5-PLy-L2QSV1Ff5QBMXVZg&waypoint0=geo!' + latLngStart +
      '&waypoint1=geo!' + latLngEnd + '&mode=fastest;car;traffic:enabled';
    this.http.get(url).subscribe(data => {
      this.maneuvers = data['response'].route[0].leg[0].maneuver;
    });
  }

  done() {
    this.finishedNavEvent.emit(true);
  }
}
