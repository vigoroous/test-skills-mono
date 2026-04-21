<script setup lang="ts">
import { RouterView } from 'vue-router';

import LayoutSlot from './Layout.slot.vue';
</script>

<template>
  <LayoutSlot>
    <template #panel>
      <RouterView name="panel" />
      <RouterView name="panelAlive" v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </template>
  </LayoutSlot>
</template>
