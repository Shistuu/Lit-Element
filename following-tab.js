var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let FollowingTab = class FollowingTab extends LitElement {
    static { this.styles = css `
    /* .top-content {
      display: flex;
      flex-direction: column;
    } */
    .paragraph {
      font-size: 16px;
      color: #646262;
    }
    .content {
      border: 1px solid #dad6d6;
      border-radius: 4px;
      height: 200px;
      padding: 20px;
      font-size: 20px;
    }
    .button {
      cursor: pointer;
      height: 35px;
      border: 1px solid #dad6d6;
      border-radius: 4px;
      width: 80px;
      margin-top: 30px;
      font-weight: bold;
      color: #575353;
    }
  `; }
    onClick() {
        alert('Button clicked!');
    }
    render() {
        return html `
      <div class="top-content">
        <div class="content">
          <div>
            <div></div>
            <p class="topic">We're keeping you in the loop</p>
            <p class="paragraph">
              Stay in-the-know by following people and spaces. Their activity
              will show up in your feed, but you won't receive email
              notifications about it. Add to, or edit, your feed anytime.
            </p>
          </div>
          <button class="button" onclick="${this.onClick}">Edit feed</button>
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