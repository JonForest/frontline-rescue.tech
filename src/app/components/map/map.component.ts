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

    const startLatLng = this.mapService.positionArray[this.mapService.currentPosition];
    map.panTo(startLatLng);
    this.mapService.personMarker.setLatLng(startLatLng);

    this.mapService.currentPosition ++;
    if (this.mapService.currentPosition === 1) {
      this.mapService.moves(this.mapService.firstMove, map, extraLayers, drawnItems, 11);
    } else if (this.mapService.currentPosition === 2) {

      const oldLayerId = this.mapService.getLayerIdFromPosition(drawnItems, 11);
      drawnItems.getLayer(oldLayerId).fire('click', {color: 'green'});
      this.mapService.moves(this.mapService.secondMove, map, extraLayers, drawnItems, 10);
      this.currentAddress.emit('18 Bank Street Blenheim');
    } else {
      const layerOne = this.mapService.getLayerIdFromPosition(drawnItems, 11);
      const layerTwo = this.mapService.getLayerIdFromPosition(drawnItems, 10);
      drawnItems.getLayer(layerOne).fire('click', {color: 'green'});
      drawnItems.getLayer(layerTwo).fire('click', {color: 'green'});
    }



    // Attach a click handler to the map. Find any layer features that are
    // contained by the users click.
    // map.on('click', (e) => {
    //   // Do nothing unless we're in the copy from layer mode.
    //   this.mapService.copyFromLayerByLatLng(5, e.latlng, drawnItems, extraLayers);
    // });
  }
}
