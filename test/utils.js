import mapboxgl from 'mapbox-gl-js-mock';
import hat from 'hat';

export function createMap() {

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v8'
  });

  return map;
}

export function click(map, payload) {
  map.fire('mousedown', payload);
  map.fire('mouseup', payload);
}

export const features = {
  multiPolygon: {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'MultiPolygon',
      coordinates: [[[[1, 1], [2, 2], [3, 3], [4, 4], [1, 1]]]]
    }
  },

  line: {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [[0, 0], [1, 1], [2, 2]]
    }
  },

  point: {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [10, 10]
    }
  },

  polygon: {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [[[1, 1], [2, 2], [3, 3], [4, 4], [1, 1]]]
    }
  },

  square: {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [[[1, 1], [1, 2], [2, 2], [2, 1], [1, 1]]]
    }
  },

  featureCollection: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [[[1, 1], [2, 2], [3, 3], [4, 4], [1, 1]]]
        }
      }
    ]
  }

};

export function createFeature(featureType) {
  const feature = features[featureType];
  feature.id = hat();
  feature.toGeoJSON = () => feature;
  return feature;
}
