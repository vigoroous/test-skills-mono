import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';

export type NavItem = {
  label: string;
  children?: NavItem[];
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
};
