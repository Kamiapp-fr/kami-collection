export function slideY(from: string = '50', to: string = '0') {
  return [
    { transform: `translateY(${from}px)`, opacity: 0 },
    { transform: `translateY(${to}px)`, opacity: 1 },
  ] as Keyframe[];
}

export function slideX(from: string = '50', to: string = '0') {
  return [
    { transform: `translateX(${from}px)`, opacity: 0 },
    { transform: `translateX(${to}px)`, opacity: 1 },
  ] as Keyframe[];
}
