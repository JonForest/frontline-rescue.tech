import { Component, OnInit, ViewChild} from '@angular/core';
declare const H;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    function moveMapToBerlin(map) {
      map.setCenter({lat: -41.5727, lng: 173.4217});
      map.setZoom(8);
    }

    // Step 1: initialize communication with the platform
    const platform = new H.service.Platform({
      app_id: '',
      app_code: '',
      useCIT: true,
      useHTTPS: true
    });
    const defaultLayers = platform.createDefaultLayers();

    // Step 2: initialize a map  - not specificing a location will give a whole world view.
    const map = new H.Map(document.getElementById('map'),
      defaultLayers.normal.map);

    // Step 3: make the map interactive
    // MapEvents enables the event system
    // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    // Now use the map as required...
    moveMapToBerlin(map);
  }

}
