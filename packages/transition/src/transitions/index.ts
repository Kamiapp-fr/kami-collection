import { fade } from './fade';
import { scale } from './scale';
import { slideX, slideY } from './slide';

export * from './fade';
export * from './slide';

type AnimationFactory = (from?: string, to?: string) => Keyframe[];

export interface Transitions {
  fade: AnimationFactory,
  scale: AnimationFactory,
  'slide-x': AnimationFactory,
  'slide-y': AnimationFactory
}

export const transitions: Transitions = {
  fade,
  scale,
  'slide-x': slideX,
  'slide-y': slideY,
};
