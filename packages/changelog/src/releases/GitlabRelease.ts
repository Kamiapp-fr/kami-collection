import dayjs from 'dayjs';
import Release from './Release';
import ProviderRelease from './ProviderRelease';

interface GitlabReleaseState{
  description: string;
  released_at: string;
  tag_name: string;
}

export default class GitlabRelease extends Release<GitlabReleaseState> {
  public get provider() {
    return ProviderRelease.GITLAB;
  }

  public getContent(): string {
    if (!Array.isArray(this.data)) {
      return this.data.description;
    }

    return this.data.reduce((value, { description }) => value + description, '');
  }

  public getDate(): Date {
    if (!Array.isArray(this.data)) {
      return dayjs(this.data.released_at).toDate();
    }

    return dayjs(this.data.pop()?.released_at).toDate();
  }
}
