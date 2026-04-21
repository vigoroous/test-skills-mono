
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';

export type NavItemProps = {
  label: string;
  to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
};
