var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './clickable-box';
let RightBarElement = class RightBarElement extends LitElement {
    static { this.styles = css `
    :host {
      width: 75%;
      flex: 1;
    }
    .right-bar {
      background-color: yellow;
      height: 100vh;
      flex: 1;
    }
  `; }
    render() {
        return html `
      <div class="right-bar">
        <div>PICK UP WHERE YOU LEFT OFF</div>

        <clickable-box
          title="Pulse Module Documentation"
          project="Vyaguta"
          date="29 January 2024"
        />
      </div>
    `;
    }
};
RightBarElement = __decorate([
    customElement('right-bar-element')
], RightBarElement);
export { RightBarElement };
//# sourceMappingURL=right-bar-element.js.map