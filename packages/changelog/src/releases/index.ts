import ProviderRelease from './ProviderRelease';
import GithubRelease from './GithubRelease';
import Release from './Release';

function releaseFactory(provider: ProviderRelease, data: any): Release {
  switch (provider) {
    case ProviderRelease.GITHUB:
      return new GithubRelease(data);

    default:
      throw new TypeError('Provider doesn\'t exist or is not define !');
  }
}

export {
  releaseFactory,
  ProviderRelease,
  GithubRelease,
  Release,
};
