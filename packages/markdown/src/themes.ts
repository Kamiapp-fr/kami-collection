import GhLight from 'github-markdown-css/github-markdown-light.css';
import GhDark from 'github-markdown-css/github-markdown-dark.css';

export enum MarkdownTheme {
  GithubLight = 'github-light',
  GithubDark = 'github-dark',
  NONE = '',
}

export function getTheme(theme: MarkdownTheme) {
  switch (theme) {
    case MarkdownTheme.GithubLight:
      return GhLight;

    case MarkdownTheme.GithubDark:
      return GhDark;

    case MarkdownTheme.NONE:
    default:
      return '';
  }
}
