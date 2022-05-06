import 'api-viewer-element';
import '@api-viewer/demo';
import '@kamiapp/theme';
import '@kamiapp/transition';
import KamiMarkdown from '@kamiapp/markdown';
import javascript from 'highlight.js/lib/languages/javascript';
import shell from 'highlight.js/lib/languages/shell';
import dark from 'highlight.js/styles/github-dark.css';

import './elements/mode';
import './elements/button';
import './elements/app';
import './elements/menu';
import './elements/home';
import './elements/guide';
import './elements/component';
import './elements/components';
import './elements/playground';

KamiMarkdown.registerHighlightLanguage('js', javascript);
KamiMarkdown.registerHighlightLanguage('sh', shell);
KamiMarkdown.registerHighlightStyle(dark);
