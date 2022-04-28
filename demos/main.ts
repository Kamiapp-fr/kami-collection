import 'api-viewer-element';
import '@api-viewer/demo';
import KamiTheme from '@kamiapp/theme';
import KamiMarkdown from '@kamiapp/markdown';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import dark from 'highlight.js/styles/github-dark.css';

import './components/mode';
import './components/button';
import './components/app';
import './components/menu';
import './components/home';
import './components/guide';

KamiMarkdown.registerHighlightLanguage('js', javascript);
KamiMarkdown.registerHighlightLanguage('sh', shell);
KamiMarkdown.registerHighlightStyle(dark);
window.customElements.define(KamiTheme.tag, KamiTheme);
