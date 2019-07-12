"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//polyfill
require("@webcomponents/webcomponentsjs/custom-elements-es5-adapter");
require("@webcomponents/webcomponentsjs/webcomponents-bundle");
require("web-animations-js");
//component
var kami_flash_1 = require("kami-flash");
exports.KamiFlash = kami_flash_1.default;
var kami_infinitelist_1 = require("kami-infinitelist");
exports.KamiInfiniteList = kami_infinitelist_1.default;
var kami_component_1 = require("kami-component");
exports.KamiComponent = kami_component_1.default;
customElements.define(kami_flash_1.default.tag, kami_flash_1.default);
customElements.define('kami-infinitelist', kami_infinitelist_1.default);
//# sourceMappingURL=KamiCollection.js.map