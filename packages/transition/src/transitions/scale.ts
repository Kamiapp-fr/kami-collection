export function scale(from: string = '0', to: string = '1') {
  return [
    { transform: `scale(${from})`, opacity: 0 },
    { transform: `scale(${to})`, opacity: 1 },
  ] as Keyframe[];
}
