import { fade } from './fade';
import {
  slideDown, slideLeft, slideRight, slideUp,
} from './slide';

export * from './fade';
export * from './slide';

export interface Transitions {
  fade: Keyframe[],
  'slide-up': Keyframe[],
  'slide-down': Keyframe[],
  'slide-right': Keyframe[],
  'slide-left': Keyframe[],
}

export const transitions: Transitions = {
  fade,
  'slide-up': slideUp,
  'slide-down': slideDown,
  'slide-left': slideLeft,
  'slide-right': slideRight,
};
