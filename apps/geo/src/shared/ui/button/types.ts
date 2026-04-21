import type { ClassType } from 'src/shared/types';
import type { StyleValue } from 'vue';
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';

export type ButtonProps = {
  icon?: ClassType;
  iconEnd?: ClassType;
  rootClass?: ClassType;
  labelClass?: ClassType;
  label?: string;
  disabled?: boolean;
  compact?: boolean;
  rounded?: boolean | 'sm';
  size?: boolean | 'sm';
  badge?: string | number | null;
  loading?: boolean;
  severity?: 'secondary' | 'error';
  pressed?: boolean;
  solid?: boolean;
  text?: boolean;
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
  rootStyle?: StyleValue
};
