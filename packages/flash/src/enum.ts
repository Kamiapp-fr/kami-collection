export function enumConverter<T extends {}>(enumValue: T, defaultValue: keyof typeof enumValue) {
  return (value: string | null) => {
    if (!value || !Object.keys(enumValue).includes(value)) {
      return enumValue[defaultValue];
    }

    return enumValue[value as keyof typeof enumValue];
  };
}

export enum KamiFlashType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export enum KamiFlashPosition {
  'top-center' = 'top-center',
  'top-left' = 'top-left',
  'top-right' = 'top-right',
  'bottom-center' = 'bottom-center',
  'bottom-left' = 'bottom-left',
  'bottom-right' = 'bottom-right',
}
