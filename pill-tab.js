var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let PillTab = class PillTab extends LitElement {
    constructor() {
        super(...arguments);
        this.active = false;
    }
    static { this.styles = css `
    .pill-tab {
      display: flex;
      align-items: center;
      padding: 10px 40px 10px 40px;
      cursor: pointer;
      user-select: none;
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
      border-bottom-left-radius: 25px;
      margin: 0 10px 10px 10px;
      background-color: lightgrey;
    }

    .pill-tab.active {
      color: #0055cc;
      background-color: #deebff;
    }

    .content {
      display: none;
    }

    .content.active {
      display: block;
    }
  `; }
    render() {
        return html `
      <div
        class="pill-tab ${this.active ? 'active' : ''}"
        @click="${this.handleTabClick}"
      >
        <div>${this.title}</div>
      </div>
      <div class="content ${this.active ? 'active' : ''}">
        <slot></slot>
      </div>
    `;
    }
    update(changedProperties) {
        super.update(changedProperties);
        // Close other tabs when a new one is opened
        if (changedProperties.has('active') && this.active) {
            const tabs = this.closest('pill-tabs');
            if (tabs) {
                tabs.closeOtherTabs(this);
            }
        }
    }
    handleTabClick() {
        this.active = true;
        this.dispatchEvent(new CustomEvent('tab-click', { bubbles: true, composed: true }));
    }
};
__decorate([
    property({ type: String })
], PillTab.prototype, "title", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], PillTab.prototype, "active", void 0);
PillTab = __decorate([
    customElement('pill-tab')
], PillTab);
export { PillTab };
let PillTabs = class PillTabs extends LitElement {
    static { this.styles = css `
    :host {
      display: flex;
    }
  `; }
    render() {
        return html `<slot></slot>`;
    }
    closeOtherTabs(selectedTab) {
        this.querySelectorAll('pill-tab').forEach((tab) => {
            if (tab !== selectedTab && tab instanceof PillTab) {
                tab.active = false;
            }
        });
    }
};
PillTabs = __decorate([
    customElement('pill-tabs')
], PillTabs);
export { PillTabs };
//# sourceMappingURL=pill-tab.js.map