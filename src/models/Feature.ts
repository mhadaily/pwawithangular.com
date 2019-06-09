import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IFeature {
  index: number;
  title: string;
  description: string;
  icon?: IconProp;
}
