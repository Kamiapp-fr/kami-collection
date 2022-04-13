import { fade } from './fade';
import { slideDown, slideUp } from './slide';

export * from './fade';
export * from './slide';

export interface Transitions {
  fade: Keyframe[],
  'slide-up': Keyframe[],
  'slide-down': Keyframe[],
}

export const transitions: Transitions = {
  fade,
  'slide-up': slideUp,
  'slide-down': slideDown,
};
