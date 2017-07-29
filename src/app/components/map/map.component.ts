import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MapService } from 'app/services/map.service';
declare const L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() currentAddress: EventEmitter<string> = new EventEmitter<string>();

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    const map = L.map(document.getElementById('map'), {
      center: this.mapService.initialPoint,
      zoom: 11,
      maxZoom: 11,
      crs: this.mapService.getCrs(),
      zoomControl: false
    });

    this.mapService.getBaseLayers().addTo(map);
    this.mapService.getExtraLayers([5]).addTo(map);

    const extraLayers = this.mapService.getExtraLayers();

    // Initialise the FeatureGroup to store editable layers
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    this.mapService.initPolys(drawnItems);
    this.mapService.personMarker.addTo(map);
    this.mapService.hazardMarker.addTo(map);
    if (drawnItems.getLayer(106)) {
      this.mapService.moves(this.mapService.firstMove, map, extraLayers, drawnItems, 106);
    } else {
      this.mapService.currentAddress = '343'
      const startLatLng = this.mapService.firstMove[this.mapService.firstMove.length - 1];
      map.panTo(startLatLng);
      this.mapService.personMarker.setLatLng(startLatLng);
      drawnItems.getLayer(246).fire('click', {latlng: startLatLng, color: 'green'});
      this.mapService.moves(this.mapService.secondMove, map, extraLayers, drawnItems, 244);
      this.currentAddress.emit('18 Bank Street Blenheim');
    }


    // Attach a click handler to the map. Find any layer features that are
    // contained by the users click.
    // map.on('click', (e) => {
    //   // Do nothing unless we're in the copy from layer mode.
    //   this.mapService.copyFromLayerByLatLng(5, e.latlng, drawnItems, extraLayers);
    // });
  }
}
