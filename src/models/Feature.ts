import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IFeature {
  index: number;
  icon?: IconProp;
  title: string;
  description: string;
}
