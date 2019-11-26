// polyfill
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'web-animations-js';

// component
import KamiFlash from 'kami-flash';
import KamiInfiniteList from 'kami-infinitelist';
import KamiComponent from 'kami-component';

[KamiFlash, KamiInfiniteList].forEach(component => {
    // this fix redefinition due at turbolink
    if (!customElements.get(component.tag)) {
        customElements.define(component.tag, component);
    }
});

export { KamiFlash, KamiInfiniteList, KamiComponent };
