import { Component, OnInit, ViewChild} from '@angular/core';
declare const L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private mapsBaseUrl = '//maps.marlborough.govt.nz/arcgis/rest/services';

  constructor() { }

  ngOnInit() {
    const map = L.map(document.getElementById('map'), {
      center: L.latLng(-41.5134, 173.9612),
      zoom: 10,
      maxZoom: 11,
      crs: this.getCrs()
    });

    this.getBaseLayers().addTo(map);
    this.getExtraLayers([5]).addTo(map);
  }


  getCrs () {
    return new L.Proj.CRS('EPSG:2193', // http://epsg.io/2193
      '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 ' +
      '+ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
      {
        origin: [-4020900, 19998100],
        resolutions: [
          396.87579375158754,
          264.5838625010584,
          132.2919312505292,
          66.1459656252646,
          33.0729828126323,
          26.458386250105836,
          13.229193125052918,
          6.614596562526459,
          2.6458386250105836,
          1.3229193125052918,
          0.6614596562526459,
          0.26458386250105836,
          0.13229193125052918,
          0.06614596562526459,
          0.033072982812632296
        ]
      }
    );
  }

  getBaseLayers () {
    const baseLayer = L.tileLayer(
      `${this.mapsBaseUrl}/Cache/Basemap/MapServer/tile/{z}/{y}/{x}`,
      {
        'maxZoom': 13,
        'attribution': '',
        'minZoom': 0,
        'continuousWorld': true
      }
    );
    const lowResLayer = L.tileLayer(
      `${this.mapsBaseUrl}/Cache/LowResolutionAerialPhotos/MapServer/tile/{z}/{y}/{x}`,
      {
        'maxZoom': 13,
        'attribution': '',
        'minZoom': 0,
        'continuousWorld': true
      }
    );
    const highResLayer = L.tileLayer(
      `${this.mapsBaseUrl}/Cache/HighResolutionAerialPhotos/MapServer/tile/{z}/{y}/{x}`,
      {
        'maxZoom': 13,
        'attribution': 'Marlborough District Council',
        'minZoom': 7,
        'continuousWorld': true
      }
    );

    return L.layerGroup([baseLayer, lowResLayer, highResLayer]);
  }

  getExtraLayers (initialLayers = []) {
    return L.esri.dynamicMapLayer({
      url: `${this.mapsBaseUrl}/Data/ContextDataPublic/MapServer`,
      f: 'image',
      format: 'png32',
      layers: initialLayers,
      opacity: 1
    });
  }
}
