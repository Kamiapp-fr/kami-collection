import ProviderRelease from './ProviderRelease';

export default abstract class Release<T = any> {
  protected data: T;

  constructor(data: T) {
    this.data = data;
  }

  abstract readonly provider: ProviderRelease;
  abstract getContent(): string;
  abstract getDate(): Date;
}
