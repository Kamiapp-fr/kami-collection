import KamiTheme from '@kamiapp/theme';
import KamiMarkdown from '@kamiapp/markdown';

import './components/button';
import './components/app';
import './components/menu';
import './components/home';
import './components/guide';

window.customElements.define(KamiTheme.tag, KamiTheme);
window.customElements.define(KamiMarkdown.tag, KamiMarkdown);
