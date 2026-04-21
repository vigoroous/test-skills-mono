<script setup lang="ts">
import { computed, type StyleValue } from 'vue';
import type { MapOptions, StyleSpecification } from 'maplibre-gl';
import darkStyle from 'src/shared/assets/map/osm_dark.json';
import lightStyle from 'src/shared/assets/map/osm_light.json';

import type { Point } from './types';
import InnerMap from './ui/InnerMap.vue';

export interface MapProps {
  dark?: boolean;
  zoom?: number;
  center?: [number, number];
  pitch?: number;
  style?: StyleValue;
  mapStyle?: StyleSpecification;
  customCursor?: boolean;
  container?: string;

  points: Point[];
}

const emit = defineEmits(['update:zoom', 'update:center', 'update:pitch']);
const props = withDefaults(defineProps<MapProps>(), {
  style: () => ({
    width: '100%',
    height: '100vh',
  }),
  container: 'map',
});

const darkClass = computed(() => (props.dark ? 'dark' : ''));
const mapStyle = computed(() => {
  const baseStyle = props.dark ? darkStyle : lightStyle;
  
  // Глубокое копирование, чтобы не мутировать исходный JSON
  const style = JSON.parse(JSON.stringify(baseStyle));

  // Заменяем ключ в URL источников (sources)
  for (const source in style.sources) {
    const s = style.sources[source];
    if (s.tiles) {
      s.tiles = s.tiles.map((url: string) => url.replace('{api_key}', import.meta.env.VITE_MAP_KEY));
    }
    if (s.url) {
      s.url = s.url.replace('{api_key}', import.meta.env.VITE_MAP_KEY);
    }
  }

  return style as StyleSpecification;

});

const options = computed<MapOptions>(() => ({
  container: props.container,
  style: props.mapStyle ?? mapStyle.value,
  attributionControl: false,
}));
</script>

<template>
  <div
    :class="darkClass"
    :style="{
      width: '100%',
      height: '100%',
    }"
  >
    <InnerMap :points="points" :options="options">
      <slot />
    </InnerMap>
  </div>
</template>
