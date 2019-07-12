//polyfill
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';
import 'web-animations-js';

//component
import KamiFlash from 'kami-flash';
import KamiInfiniteList from 'kami-infinitelist';
import KamiComponent from 'kami-component';

customElements.define(KamiFlash.tag,KamiFlash);
customElements.define('kami-infinitelist',KamiInfiniteList);

export {
    KamiFlash,
    KamiInfiniteList,
    KamiComponent
}