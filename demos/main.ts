import KamiTheme from '@kamiapp/theme';
import KamiMarkdown from '@kamiapp/markdown';
import javascript from 'highlight.js/lib/languages/javascript';
import style from 'highlight.js/styles/gradient-dark.css';

import './components/mode';
import './components/button';
import './components/app';
import './components/menu';
import './components/home';
import './components/guide';

KamiMarkdown.registerHighlightLanguage('js', javascript);
KamiMarkdown.registerHighlightStyle(style);
window.customElements.define(KamiTheme.tag, KamiTheme);
window.customElements.define(KamiMarkdown.tag, KamiMarkdown);
