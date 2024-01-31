var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let LeftBarElement = class LeftBarElement extends LitElement {
    static { this.styles = css `
    .left-bar {
      z-index: 1;
      height: 100vh;
      min-width: 260px;
      margin-left: -15px;
      width: 25%;
    }

    .tabs {
      display: flex;
      flex-direction: column;
    }

    .tab {
      padding: 8px;
      cursor: pointer;
    }

    .tab:hover {
      color: #0055cc;
      background-color: lightblue;
      border-radius: 4px;
      width: full;
    }

    .space-category {
      margin-top: 20px;
      color: #636f86;
      font-size: 14px;
    }

    .space {
      font-weight: bold;
      padding: 5px;
      font-size: 12px;
    }

    .space-tab {
      padding: 8px 0 8px 2px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .space-tab:hover {
      background-color: lightgrey;
      border-radius: 4px;
    }
  `; }
    handleTabHover() {
        console.log('Tab hovered');
    }
    render() {
        return html `
      <div class="left-bar">
        <div class="tabs">
          <div class="tab" @mouseover="${this.handleTabHover()}">Overview</div>
          <div class="tab" @mouseover="${this.handleTabHover}">Recent</div>
          <div class="tab" @mouseover="${this.handleTabHover}">Starred</div>
          <div class="tab" @mouseover="${this.handleTabHover}">Drafts</div>
          <div class="tab" @mouseover="${this.handleTabHover}">Tasks</div>
        </div>

        <div class="space-category">
          <div class="space">SPACES</div>
          <div class="tab" @mouseover="${this.handleTabHover}">Vyaguta</div>
          <div class="tab" @mouseover="${this.handleTabHover}">Leapfrog</div>
        </div>
      </div>
    `;
    }
};
LeftBarElement = __decorate([
    customElement('left-bar-element')
], LeftBarElement);
export { LeftBarElement };
//# sourceMappingURL=left-bar-element.js.map