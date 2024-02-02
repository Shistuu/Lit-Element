import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '@material/mwc-icon/mwc-icon.js';

import {
  TASKS,
  DRAFTS,
  RECENT,
  SPACES,
  VYAGUTA,
  STARRED,
  LEAPFROG,
  OVERVIEW,
  LEAPFROG_LOGO,
} from './constants/constants';

@customElement('left-bar-element')
export class LeftBarElement extends LitElement {
  static override readonly styles = css`
    .left-bar {
      z-index: 1;
      height: 100vh;
      min-width: 260px;
      margin-left: -15px;
      width: 25%;
      padding-left: 150px;
    }

    .tabs {
      padding-top: 32px;
    }

    .tab {
      padding: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
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

    .space-logo {
      width: 20px;
      height: 20px;
      padding-right: 6px;

      img {
        max-width: 100%;
      }
    }

    .space-tab:hover {
      background-color: lightgrey;
      border-radius: 4px;
    }
  `;

  static override readonly properties = {
    imageUrl: {type: String},
  };

  imageUrl = '../dev/assets/global.jpg';

  private handleTabHover() {
    console.log('Tab hovered');
  }

  override render() {
    return html`
      <div class="left-bar">
        <div class="tabs">
          ${this.renderTab('home', OVERVIEW)}
          ${this.renderTab('schedule', RECENT)}
          ${this.renderTab('star', STARRED)} ${this.renderTab('task', DRAFTS)}
          ${this.renderTab('check_box', TASKS)}
        </div>

        <div class="space-category">
          <div class="space">${SPACES}</div>

          ${this.renderSpaceTab(VYAGUTA)} ${this.renderSpaceTab(LEAPFROG)}
        </div>
      </div>
    `;
  }

  private renderTab(icon: string, text: string) {
    return html`
      <div class="tab" @mouseover="${this.handleTabHover}">
        <span><mwc-icon>${icon}</mwc-icon></span>
        <span>${text}</span>
      </div>
    `;
  }

  private renderSpaceTab(spaceName: string) {
    return html`
      <div class="tab" @mouseover="${this.handleTabHover}">
        <div class="space-logo">
          <img src=${this.imageUrl} alt=${LEAPFROG_LOGO} />
        </div>
        <span>${spaceName}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'left-bar-element': LeftBarElement;
  }
}
