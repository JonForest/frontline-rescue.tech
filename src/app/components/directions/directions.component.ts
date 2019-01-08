import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MapService} from '../../services/map.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
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
    const url = 'https://route.api.here.com/routing/7.2/calculateroute.json?app_id=VD7fADcB2g1hc5WoHKvo' +
      '&app_code=QC5mQVUgcczs3NRtiZcprA&waypoint0=geo!' + latLngStart +
      '&waypoint1=geo!' + latLngEnd + '&mode=fastest;car;traffic:enabled';
    this.http.get(url).subscribe(data => {
      this.maneuvers = data['response'].route[0].leg[0].maneuver;
    });
  }
}
