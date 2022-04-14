export function fade(from: string = '0', to: string = '1') {
  return [
    { opacity: from },
    { opacity: to },
  ] as Keyframe[];
}
