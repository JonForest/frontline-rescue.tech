import { Component, OnInit} from '@angular/core';
import { MapService } from 'app/services/map.service';
declare const L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    const map = L.map(document.getElementById('map'), {
      center: L.latLng(-41.5134, 173.9612),
      zoom: 10,
      maxZoom: 11,
      crs: this.mapService.getCrs()
    });

    this.mapService.getBaseLayers().addTo(map);
    this.mapService.getExtraLayers([5]).addTo(map);

    const extraLayers = this.mapService.getExtraLayers();

    // Initialise the FeatureGroup to store editable layers
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);


    // Attach a click handler to the map. Find any layer features that are
    // contained by the users click.
    map.on('click', (e) => {
      // Do nothing unless we're in the copy from layer mode.
      this.mapService.copyFromLayerByLatLng(5, e.latlng, drawnItems, extraLayers);
    });
  }
}
