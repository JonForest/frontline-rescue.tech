import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
declare const L, _, proj4;

proj4.defs('NZTM', '+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 ' +
  '+y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');

@Injectable()
export class MapService {
  public initialPolygons = [[[-41.51116634872526, 173.93983251679614], [-41.51096594876866, 173.9398163670597], [-41.510937299372614, 173.93985008323756], [-41.51092134926699, 173.94019598378193], [-41.51094391596331, 173.94019776628468], [-41.511148948643545, 173.94021431616457], [-41.511149515895035, 173.94020233273847], [-41.51116634872526, 173.93983251679614]], [[-41.51150903229108, 173.93986001664413], [-41.51137824902809, 173.93984956637362], [-41.51135993222552, 173.93984808272074], [-41.51116634872526, 173.93983251679614], [-41.511149515895035, 173.94020233273847], [-41.511148948643545, 173.94021431616457], [-41.51118094883322, 173.94021684993015], [-41.5113987160679, 173.94023438351113], [-41.51141884931058, 173.9402360169876], [-41.5114916654407, 173.94024181610138], [-41.51150903229108, 173.93986001664413]], [[-41.5114916654407, 173.94024181610138], [-41.51141884931058, 173.9402360169876], [-41.5113987160679, 173.94023438351113], [-41.51118094883322, 173.94021684993015], [-41.51116666560235, 173.94053138328763], [-41.51114644879549, 173.9405551661799], [-41.51092849888256, 173.94053761698012], [-41.51092661560258, 173.94057944945055], [-41.51147431551457, 173.9406234837781], [-41.5114916654407, 173.94024181610138]], [[-41.51118094883322, 173.94021684993015], [-41.511148948643545, 173.94021431616457], [-41.51094391596331, 173.94019776628468], [-41.51092849888256, 173.94053761698012], [-41.51114644879549, 173.9405551661799], [-41.51116666560235, 173.94053138328763], [-41.51118094883322, 173.94021684993015]], [[-41.51147431551457, 173.9406234837781], [-41.51092661560258, 173.94057944945055], [-41.51092246544792, 173.94067058275502], [-41.51091793230987, 173.940770316839], [-41.511229065791, 173.94079539941794], [-41.5114656320152, 173.9408143671452], [-41.51147431551457, 173.9406234837781]], [[-41.5114656320152, 173.9408143671452], [-41.511229065791, 173.94079539941794], [-41.51122868241888, 173.94080471684364], [-41.51122353267469, 173.94094798363207], [-41.511208665387215, 173.94096469946993], [-41.51103644930554, 173.94095098314048], [-41.510911598878465, 173.94094101692355], [-41.510910182220975, 173.94094088376602], [-41.51090936570156, 173.9409588838919], [-41.510909265822555, 173.94096118322017], [-41.510908532753774, 173.940976799897], [-41.5109150157098, 173.94097730001462], [-41.510971465387975, 173.94098179996936], [-41.511034832531394, 173.9409868662614], [-41.51103553276768, 173.94097129940843], [-41.51103563229533, 173.94096893296455], [-41.511146299067526, 173.94097778312022], [-41.51114618201607, 173.94098019964395], [-41.5111454659691, 173.94099571716302], [-41.51115569877846, 173.940996532827], [-41.5111682656241, 173.94101823314807], [-41.51116119871638, 173.94117098311895], [-41.5111611155572, 173.94117299989333], [-41.51144828235444, 173.94119610042043], [-41.511456949237356, 173.94100523369383], [-41.511460365479294, 173.94093018380917], [-41.5114656320152, 173.9408143671452]], [[-41.5111682656241, 173.94101823314807], [-41.51115569877846, 173.940996532827], [-41.5111454659691, 173.94099571716302], [-41.51114618201607, 173.94098019964395], [-41.511146299067526, 173.94097778312022], [-41.51103563229533, 173.94096893296455], [-41.51103553276768, 173.94097129940843], [-41.511034832531394, 173.9409868662614], [-41.510971465387975, 173.94098179996936], [-41.5109150157098, 173.94097730001462], [-41.510908532753774, 173.940976799897], [-41.51090058279792, 173.94115205050795], [-41.510907049404544, 173.9411525671826], [-41.5111611155572, 173.94117299989333], [-41.51116119871638, 173.94117098311895], [-41.5111682656241, 173.94101823314807]], [[-41.51144828235444, 173.94119610042043], [-41.5111611155572, 173.94117299989333], [-41.510907049404544, 173.9411525671826], [-41.51090058279792, 173.94115205050795], [-41.51089664879004, 173.94123839958056], [-41.51089189932952, 173.94134293331516], [-41.51143959894403, 173.94138696685533], [-41.511446432512315, 173.9412368995308], [-41.51144828235444, 173.94119610042043]], [[-41.51143959894403, 173.94138696685533], [-41.51089189932952, 173.94134293331516], [-41.510890349024294, 173.9413767334309], [-41.510889032015804, 173.94140579996719], [-41.51092158222309, 173.94150453384864], [-41.51104218239621, 173.94165373377788], [-41.511079215359665, 173.9416245328928], [-41.51115411564426, 173.94156543370664], [-41.511430565465126, 173.94158556697846], [-41.51143713238799, 173.94144136645122], [-41.51143959894403, 173.94138696685533]], [[-41.511430565465126, 173.94158556697846], [-41.51115411564426, 173.94156543370664], [-41.511079215359665, 173.9416245328928], [-41.51135311563482, 173.94198391692564], [-41.51141223248664, 173.94198861703717], [-41.511430565465126, 173.94158556697846]], [[-41.51170294876966, 173.9398756163286], [-41.51150903229108, 173.93986001664413], [-41.5114916654407, 173.94024181610138], [-41.51147431551457, 173.9406234837781], [-41.51166709882675, 173.94063896626903], [-41.51167598238997, 173.94063966648469], [-41.511676099343426, 173.94063968375622], [-41.51168613200708, 173.94044845018794], [-41.511695532299946, 173.94026908290485], [-41.51168171574377, 173.94026658335295], [-41.51170288231685, 173.93987658362187], [-41.51170294876966, 173.9398756163286]], [[-41.512052449220846, 173.9399768162221], [-41.51200098245943, 173.93989956719273], [-41.51170294876966, 173.9398756163286], [-41.51170288231685, 173.93987658362187], [-41.51168171574377, 173.94026658335295], [-41.511695532299946, 173.94026908290485], [-41.51168613200708, 173.94044845018794], [-41.51193569913405, 173.94046855049174], [-41.51195071609016, 173.9404817662471], [-41.51197768239067, 173.94048393372378], [-41.512013649090676, 173.94048683305144], [-41.51202974884213, 173.94047613363432], [-41.512052449220846, 173.9399768162221]], [[-41.51202974884213, 173.94047613363432], [-41.512013649090676, 173.94048683305144], [-41.51197768239067, 173.94048393372378], [-41.51195071609016, 173.9404817662471], [-41.51193569913405, 173.94046855049174], [-41.51168613200708, 173.94044845018794], [-41.511676099343426, 173.94063968375622], [-41.51202104943386, 173.94066744982518], [-41.512024315968475, 173.94059569973052], [-41.5120265992973, 173.94054548276156], [-41.51202974884213, 173.94047613363432]], [[-41.51202104943386, 173.94066744982518], [-41.511676099343426, 173.94063968375622], [-41.51167598238997, 173.94063966648469], [-41.51166709882675, 173.94063896626903], [-41.51165696565443, 173.94086193377342], [-41.5116823991986, 173.94090006638143], [-41.51200926585574, 173.94092633286894], [-41.51202104943386, 173.94066744982518]], [[-41.51200926585574, 173.94092633286894], [-41.5116823991986, 173.94090006638143], [-41.51165696565443, 173.94086193377342], [-41.51166709882675, 173.94063896626903], [-41.51147431551457, 173.9406234837781], [-41.5114656320152, 173.9408143671452], [-41.511460365479294, 173.94093018380917], [-41.51167589862732, 173.94094751615796], [-41.51200708230073, 173.94097413300446], [-41.51200926585574, 173.94092633286894]], [[-41.51199504936555, 173.94123896687415], [-41.51171419941584, 173.9412164163875], [-41.51166689879181, 173.9411453997523], [-41.51167589862732, 173.94094751615796], [-41.511460365479294, 173.94093018380917], [-41.511456949237356, 173.94100523369383], [-41.51144828235444, 173.94119610042043], [-41.511446432512315, 173.9412368995308], [-41.51199314947531, 173.9412808165456], [-41.51199504936555, 173.94123896687415]], [[-41.51200708230073, 173.94097413300446], [-41.51167589862732, 173.94094751615796], [-41.51166689879181, 173.9411453997523], [-41.51171419941584, 173.9412164163875], [-41.51199504936555, 173.94123896687415], [-41.51200708230073, 173.94097413300446]], [[-41.51199314947531, 173.9412808165456], [-41.511446432512315, 173.9412368995308], [-41.51143959894403, 173.94138696685533], [-41.51143713238799, 173.94144136645122], [-41.5117068494604, 173.94146301710325], [-41.51198384940291, 173.94148526720448], [-41.511991432507244, 173.94131858372333], [-41.51199314947531, 173.9412808165456]], [[-41.51180236597839, 173.94176195051966], [-41.51173948207912, 173.94166421713064], [-41.51170066560179, 173.94160388282063], [-41.5117068494604, 173.94146301710325], [-41.51143713238799, 173.94144136645122], [-41.511430565465126, 173.94158556697846], [-41.51141223248664, 173.94198861703717], [-41.511796399357145, 173.9420193170429], [-41.511797915592076, 173.94187774957567], [-41.51180236597839, 173.94176195051966]], [[-41.51198384940291, 173.94148526720448], [-41.5117068494604, 173.94146301710325], [-41.51170066560179, 173.94160388282063], [-41.51173948207912, 173.94166421713064], [-41.5119748657649, 173.9416831494959], [-41.51198384940291, 173.94148526720448]], [[-41.5119748657649, 173.9416831494959], [-41.51173948207912, 173.94166421713064], [-41.51180236597839, 173.94176195051966], [-41.511797915592076, 173.94187774957567], [-41.511796399357145, 173.9420193170429], [-41.511904232182516, 173.94202796625103], [-41.51196231546268, 173.94195948325043], [-41.5119748657649, 173.9416831494959]]];
  public initialPoint  = L.latLng(-41.5123, 173.9398);
  public hazardPoint  = L.latLng(-41.5116, 173.9403);
  public personMarker;
  public hazardMarker;
  // public currentAddress = '16 Bank Street Blenheim';
  public currentPosition = 0;
  public positionArray = [
    [-41.5123, 173.9398],
    [-41.5119, 173.9401],
    [-41.5116, 173.9401]
  ];
  public basePosition = [-41.52, 173.91];
  private mapsBaseUrl = '//maps.marlborough.govt.nz/arcgis/rest/services';
  public firstMove = [
    [-41.5123, 173.9398],
    [-41.5122, 173.9398],
    [-41.5121, 173.9399],
    [-41.5120, 173.94],
    [-41.5119, 173.9401],
  ];

  public secondMove = [
    [-41.5119, 173.9401],
    [-41.5118, 173.9401],
    [-41.5117, 173.9401],
    [-41.5116, 173.9401],
  ];

 hazardIcon = L.icon({
    iconUrl: '/assets/icons/hazard-inverted.svg',

    iconSize:     [30, 55], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  teamIcon = L.icon({
    iconUrl: '/assets/icons/team-inverted.svg',

    iconSize:     [30, 55], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

  constructor(private router: Router) {
  }

  initPolys(drawnItems) {
    this.initialPolygons.forEach(p => {
      const poly = L.polygon(p);
      poly.on('click', (e) => {
        poly.setStyle({
          opacity: 0.8,
          color: e.color
        });
        // Stop the event from bubbling.
        L.DomEvent.stopPropagation(e);
      });

      drawnItems.addLayer(poly);
      this.personMarker = L.marker(this.initialPoint, {icon: this.teamIcon});
      this.hazardMarker = L.marker(this.hazardPoint, {icon: this.hazardIcon});
      this.hazardMarker.on('click', () => {
        this.router.navigateByUrl('/hazards');
      });
    });
  }

  getCrs() {
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

  getBaseLayers() {
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

  getExtraLayers(initialLayers = []) {
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




  moves(moveSet, map, extraLayers, drawnItems, layerPosition) {
    const layerId = this.getLayerIdFromPosition(drawnItems, layerPosition);
    let x = 0;
    const run = setInterval(() => {
      if (x < moveSet.length) {
        this.personMarker.setLatLng(moveSet[x]);
        map.panTo(moveSet[x]);
        x++;
      } else {
        clearInterval(run);
        // this.renderPoly(moveSet[x-1], extraLayers, drawnItems, layerId)
        drawnItems.getLayer(layerId).fire('click', {latlng: moveSet[x - 1], color: 'blue'});
      }
    }, 200);
  }

  public getLayerIdFromPosition(drawnItems, layerPosition) {
    let count = 0;
    let layerId = 0;
    Object.keys(drawnItems._layers).forEach(id => {
      if (count === layerPosition) {
        layerId = Number(id);
      }
      count++;
    });

    return layerId;
  }

  private convertPoints = (value) => {
    // Take a copy to prevent modifiying the given array.
    const list = _.cloneDeep(value);

    if (!_.isArray(list) || _.isEmpty(list)) {
      return list;
    }

    // Determine if this is array is co-ordinates.
    if (list.length === 2 && _.isNumber(list[0]) && _.isNumber(list[1])) {
      // Reverse the co-ordinate positions.
      return list.reverse();
    }

    return list.map(item => this.convertPoints(item));
  }
  //
  private renderPoly(latlng, extraLayers, drawnItems, layerId) {
    drawnItems.getLayer(layerId).fire('click', {latlng: latlng, color: 'blue'});
    extraLayers.query()
      .layer(5)
      .contains(L.latLng(latlng)) // todo: deprecated.  replace with `includes`
      .run((err, featureCollection) => {
        // We're only concerned with a single feature.
        const feature = featureCollection.features[0];

        // The points we get back from ESRI need to be reversed from lng/lat
        // to lat/lng.
        const polygons = this.convertPoints(feature.geometry.coordinates);

      });
  }

  nztmToLatLng (coordinates) {
    return proj4('NZTM', 'WGS84', coordinates).reverse();
  }

  latLngToNztm (latlng) {
    return proj4('WGS84', 'NZTM', [latlng.lng, latlng.lat]);
  }

  /**
   * Copy a polygon shape from a layer by co-ordinates of the layer feature.
   */
  // copyFromLayerByLatLng(layer, latlng, drawnItems, extraLayers) {
  //   // Query ESRI to find features on the layer we're interested in.
  //   return new Promise((resolve, reject) => {
  //     extraLayers.query()
  //       .layer(layer)
  //       .contains(latlng) // todo: deprecated.  replace with `includes`
  //       .run((err, featureCollection) => {
  //         this.esriQueryHandler(err, featureCollection, resolve, reject, drawnItems);
  //       });
  //   });
  // }




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
  // esriQueryHandler(error, featureCollection, resolve, reject, drawnItems) {
  //   if (error) {
  //     return reject(error);
  //   }
  //   if (!featureCollection.features.length) {
  //     return resolve(false);
  //   }
  //
  //   // We're only concerned with a single feature.
  //   const feature = featureCollection.features[0];
  //
  //   // The points we get back from ESRI need to be reversed from lng/lat
  //   // to lat/lng.
  //   const polygons = this.convertPoints(feature.geometry.coordinates);
  //   // Cannot deal with multi-polygons, so add them separately.
  //   polygons.forEach(p => {
  //     this.polys.push(p);
  //     const poly = L.polygon(p);
  //     poly.on('click', (e) => {
  //       debugger
  //       poly.setStyle({
  //           opacity: 0.8,
  //           color: e.color
  //       });
  //       // Stop the event from bubbling.
  //       L.DomEvent.stopPropagation(e);
  //     });
  //     drawnItems.addLayer(poly);
  //   });
  //   resolve(true);
  // }




}
