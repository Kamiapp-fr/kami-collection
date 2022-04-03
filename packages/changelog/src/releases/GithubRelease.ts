import dayjs from 'dayjs';
import Release from './Release';
import ProviderRelease from './ProviderRelease';

interface GithubReleaseState{
  body: string;
  published_at: string;
  tag_name: string;
}

export default class GithubRelease extends Release<GithubReleaseState> {
  public get provider() {
    return ProviderRelease.GITHUB;
  }

  public getContent(): string {
    return this.data.body;
  }

  public getDate(): Date {
    return dayjs(this.data.published_at).toDate();
  }
}
