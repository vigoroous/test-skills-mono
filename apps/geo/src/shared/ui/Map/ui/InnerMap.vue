<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue';
import maplibregl, { type MapOptions } from 'maplibre-gl';

import 'maplibre-gl/dist/maplibre-gl.css';

import type { Point } from '../types';

interface Props {
  points: Point[];
  lineColor?: string;
  lineWidth?: number;
  options: MapOptions;
}

const props = withDefaults(defineProps<Props>(), {
  lineColor: '#ff0000',
  lineWidth: 4,
});

const mapContainer = ref<HTMLElement | null>(null);
const map = shallowRef<maplibregl.Map | null>(null);

const getRouteGeoJSON = (points: Point[]): GeoJSON.Feature<GeoJSON.LineString> => ({
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'LineString',
    coordinates: points.map((p) => [p.long, p.lat]),
  },
});

onMounted(() => {
  if (!mapContainer.value) return;

  map.value = new maplibregl.Map({
    ...props.options,
    container: mapContainer.value,
    center: props.points.length > 0 ? [props.points[0].long, props.points[0].lat] : [0, 0],
    zoom: 12,
  });

  map.value.on('load', () => {
    if (!map.value) return;

    map.value.addSource('route', {
      type: 'geojson',
      data: getRouteGeoJSON(props.points),
    });

    map.value.addLayer({
      id: 'route-layer',
      type: 'line',
      source: 'route',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': props.lineColor,
        'line-width': props.lineWidth,
      },
    });

    fitBounds();
  });
});

const fitBounds = () => {
  if (!map.value || props.points.length === 0) return;

  const bounds = new maplibregl.LngLatBounds();
  props.points.forEach((p) => bounds.extend([p.long, p.lat]));

  map.value.fitBounds(bounds, { padding: 50 });
};

watch(
  () => props.points,
  (newPoints) => {
    const source = map.value?.getSource('route') as maplibregl.GeoJSONSource;
    if (source) {
      source.setData(getRouteGeoJSON(newPoints));
      fitBounds();
    }
  },
  { deep: true },
);
</script>

<template>
  <div ref="mapContainer" class="map-container">
    <slot />
  </div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  min-height: 500px;
}
</style>
