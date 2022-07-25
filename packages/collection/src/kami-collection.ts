import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'web-animations-js';

import KamiFlash from '@kamiapp/flash';
import KamiInfiniteList from '@kamiapp/infinite-list';
import KamiComponent from '@kamiapp/component';
import KamiChangelog from '@kamiapp/changelog';
import KamiMarkdown from '@kamiapp/markdown';
import KamiProgressBar from '@kamiapp/progress-bar';
import KamiTheme from '@kamiapp/theme';
import KamiTransition from '@kamiapp/transition';

[
  KamiInfiniteList,
].forEach((component) => {
  if (customElements.get(component.tag)) {
    return;
  }

  customElements.define(component.tag, component);
});

export {
  KamiFlash,
  KamiInfiniteList,
  KamiComponent,
  KamiTheme,
  KamiTransition,
  KamiProgressBar,
  KamiMarkdown,
  KamiChangelog,
};
