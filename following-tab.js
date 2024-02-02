var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/mwc-icon/mwc-icon';
import { LOOP_TOPIC, LEAPFROG_LOGO, EDIT_FEED_TEXT, LOOP_PARAGRAPH, } from './constants/constants';
let FollowingTab = class FollowingTab extends LitElement {
    constructor() {
        super(...arguments);
        this.imageUrl = '../dev/assets/net.jpg';
    }
    static { this.styles = css `
    .top-content {
      border-radius: 10px;
      padding: 0 0px 15px 20px;
      border: 1px solid #dad6d6;
    }
    .icon {
      display: flex;
      justify-content: flex-end;
      padding: 10px 10px 0 0;
      height: 5px;
      cursor: pointer;
    }

    .button {
      cursor: pointer;
      border: 1px solid #dad6d6;
      border-radius: 4px;
      padding: 10px;
      margin-top: 10px;
      font-weight: bold;
      color: #575353;
    }

    .content {
      display: flex;
      align-items: center;
      border-radius: 4px;
      font-size: 18px;

      img {
        display: flex;
        height: 156px;
        width: 156px;
        margin-right: 50px;
      }
    }

    .paragraph {
      font-size: 13px;
    }
  `; }
    onClick() {
        alert('Button clicked!');
    }
    static { this.properties = {
        imageUrl: { type: String },
    }; }
    render() {
        return html `
      <div class="top-content">
        <mwc-icon class="icon">close</mwc-icon>
        <div class="content">
          <div>
            <div>
              ${LOOP_TOPIC}
              <p class="paragraph">${LOOP_PARAGRAPH}</p>
            </div>
            <button class="button" @click="${this.onClick}">
              ${EDIT_FEED_TEXT}
            </button>
          </div>
          <div>
            <img src=${this.imageUrl} alt=${LEAPFROG_LOGO} />
          </div>
        </div>
      </div>
    `;
    }
};
FollowingTab = __decorate([
    customElement('following-tab')
], FollowingTab);
export { FollowingTab };
//# sourceMappingURL=following-tab.js.map