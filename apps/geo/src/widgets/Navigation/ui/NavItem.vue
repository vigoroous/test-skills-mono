<script setup lang="ts">
import Button from 'src/shared/ui/button';

import type { NavItemProps } from '../types';

defineProps<NavItemProps>();
</script>

<template>
  <Button
    :label="label"
    rounded
    text
    :root-class="['w-full !justify-start text-start leading-[20px] !py-1.25']"
    :label-class="['!font-400 !text-[16px] pl-[10px]']"
    :to="to"
  />
</template>
