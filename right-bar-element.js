var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let RightBarElement = class RightBarElement extends LitElement {
    static styles = css `
    .right-bar {
      background-color: yellow;
      height: 100vh;
      margin-left: 27%;
      width: 77%;
      /* z-index: 1000; */
      position: fixed;
      padding: 10px;
      margin-top: 45px;
    }
  `;
    render() {
        return html ` <div class="right-bar">PICK UP WHERE YOU LEFT OFF</div> `;
    }
};
RightBarElement = __decorate([
    customElement('right-bar-element')
], RightBarElement);
export { RightBarElement };
//# sourceMappingURL=right-bar-element.js.map