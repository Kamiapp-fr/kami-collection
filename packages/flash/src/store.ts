/* eslint-disable operator-assignment */
import { KamiFlashPosition } from './enum';
import type KamiFlash from './index';

export interface KamiFlashStoreInterface {
  readonly stored: KamiFlash[];
  indexes: { [position in KamiFlashPosition]: number };
  items: { [position in KamiFlashPosition]: KamiFlash[] };
  add: (flash: KamiFlash) => void;
  remove: (flash: KamiFlash) => void;
  reIndex: (position: KamiFlashPosition) => void;
}

export const KamiFlashStore: KamiFlashStoreInterface = {
  get stored() {
    return Object.values(this.items).flat();
  },
  indexes: {
    'top-center': 0,
    'top-left': 0,
    'top-right': 0,
    'bottom-center': 0,
    'bottom-left': 0,
    'bottom-right': 0,
  },
  items: {
    'top-center': [],
    'top-left': [],
    'top-right': [],
    'bottom-center': [],
    'bottom-left': [],
    'bottom-right': [],
  },
  reIndex(position) {
    this.items[position].forEach((f, i) => f.setIndex(i));
  },
  add(flash: KamiFlash) {
    const { position } = flash;

    flash.setIndex(this.indexes[position]);
    this.items[position].push(flash);
    this.indexes[position] = this.indexes[position] + 1;
  },
  remove(flash: KamiFlash) {
    const { position } = flash;
    const findIndex = ({ index }: KamiFlash) => index !== flash.index;

    this.items[position] = this.items[position].filter(findIndex);
    this.indexes[position] = this.indexes[position] - 1;
    this.reIndex(position);
  },
};
