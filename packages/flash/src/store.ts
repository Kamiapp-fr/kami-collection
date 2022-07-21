import { KamiFlashPosition } from './enum';
import type KamiFlash from './index';

export interface KamiFlashStoreInterface {
  readonly stored: KamiFlash[];
  index: number;
  items: { [position in KamiFlashPosition]: KamiFlash[] }
  add: (flash: KamiFlash) => void;
  remove: (flash: KamiFlash) => void;
}

export const KamiFlashStore: KamiFlashStoreInterface = {
  get stored() {
    return Object.values(this.items).flat();
  },
  index: 0,
  items: {
    'top-center': [],
    'top-left': [],
    'top-right': [],
    'bottom-center': [],
    'bottom-left': [],
    'bottom-right': [],
  },
  add(flash: KamiFlash) {
    flash.setIndex(this.index);
    this.items[flash.position].push(flash);
    this.index += 1;
  },
  remove(flash: KamiFlash) {
    const findIndex = ({ index }: KamiFlash) => index !== flash.index;

    if (!flash.index) {
      return;
    }

    this.items[flash.position] = this.items[flash.position].filter(findIndex);
  },
};
