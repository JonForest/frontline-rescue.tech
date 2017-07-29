import { Injectable } from '@angular/core';
declare const L, _;

@Injectable()
export class MapService {

  private mapsBaseUrl = '//maps.marlborough.govt.nz/arcgis/rest/services';

  constructor() { }

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

  getArghh() {
    return L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/{type}/{mapID}/{scheme}/{z}/{x}/{y}/{size}/{format}?app_id=itWl7z9WHWl48Kvv2zYy&app_code=5-PLy-L2QSV1Ff5QBMXVZg&lg=en', {
      attribution: 'Map &copy; 2016 <a href="http://developer.here.com">HERE</a>',
      subdomains: '1234',
      base: 'base',
      type: 'maptile',
      scheme: 'pedestrian.day',
      app_id: 'itWl7z9WHWl48Kvv2zYy',
      app_code: '5-PLy-L2QSV1Ff5QBMXVZg',
      mapID: 'newest',
      maxZoom: 20,
      minZoom: 7,
      language: 'eng',
      format: 'png8',
      size: '256'
    });
  }


  /**
   * Copy a polygon shape from a layer by co-ordinates of the layer feature.
   */
  copyFromLayerByLatLng (layer, latlng, drawnItems, extraLayers) {
    // Query ESRI to find features on the layer we're interested in.
    return new Promise((resolve, reject) => {
      extraLayers.query()
        .layer(layer)
        .contains(latlng) // todo: deprecated.  replace with `includes`
        .run((err, featureCollection) => {
          this.esriQueryHandler(err, featureCollection, resolve, reject, drawnItems);
        });
    });
  }


  /**
   * Handler callback for an ESRI query.
   *
   * @param {Object|undefined} error See ESRI leaflet.
   * @param {Object[]} featureCollection See ESRI leaflet.
   * @param {Function} resolve
   * @param {Function} reject
   * @param {Object} L.FeatureGroup drawnItems
   * @return {undefined}
   */
  esriQueryHandler (error, featureCollection, resolve, reject, drawnItems) {
    if (error) { return reject(error); }
    if (!featureCollection.features.length) { return resolve(false); }

    // We're only concerned with a single feature.
    const feature = featureCollection.features[0]

    // The points we get back from ESRI need to be reversed from lng/lat
    // to lat/lng.
    const polygons = this.convertPoints(feature.geometry.coordinates)
    // Cannot deal with multi-polygons, so add them separately.
    polygons.forEach(p => {
      const poly = L.polygon(p);
      poly.on('click', (e) => {
          poly.setStyle({color: 'green'});
        // Stop the event from bubbling.
        L.DomEvent.stopPropagation(e);
      });
      drawnItems.addLayer(poly);
    });

    resolve(true);
  }

  private convertPoints = (value) => {
    // Take a copy to prevent modifiying the given array.
    const list = _.cloneDeep(value);

    if (!_.isArray(list) || _.isEmpty(list)) { return list; }

    // Determine if this is array is co-ordinates.
    if (list.length === 2 && _.isNumber(list[0]) && _.isNumber(list[1])) {
      // Reverse the co-ordinate positions.
      return list.reverse();
    }

    return list.map(item => this.convertPoints(item));
  }
}
