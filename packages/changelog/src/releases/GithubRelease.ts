import dayjs from 'dayjs';
import Release from './Release';
import ProviderRelease from './ProviderRelease';

interface GithubReleaseState {
  body: string;
  published_at: string;
  tag_name: string;
}

export default class GithubRelease extends Release<GithubReleaseState> {
  public get provider() {
    return ProviderRelease.GITHUB;
  }

  public getContent(): string {
    if (!Array.isArray(this.data)) {
      return this.data.body;
    }

    return this.data.reduce((value, { body }) => value + body, '');
  }

  public getDate(): Date {
    if (!Array.isArray(this.data)) {
      return dayjs(this.data.published_at).toDate();
    }

    return dayjs(this.data.pop()?.published_at).toDate();
  }
}
