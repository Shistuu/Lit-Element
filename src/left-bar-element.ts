import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/mwc-icon/mwc-icon.js';

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
      padding: 8px;
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

  static override properties = {
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
          <div class="tab" @mouseover="${this.handleTabHover}">
            <span><mwc-icon>home</mwc-icon></span>
            <span>Overview</span>
          </div>
          <div class="tab" @mouseover="${this.handleTabHover}">
            <span><mwc-icon>schedule</mwc-icon></span>
            <span>Recent</span>
          </div>
          <div class="tab" @mouseover="${this.handleTabHover}">
            <span><mwc-icon>star</mwc-icon></span>
            <span>Starred</span>
          </div>
          <div class="tab" @mouseover="${this.handleTabHover}">
            <span><mwc-icon>task</mwc-icon></span>
            <span>Drafts</span>
          </div>
          <div class="tab" @mouseover="${this.handleTabHover}">
            <span><mwc-icon>check_box</mwc-icon></span>
            <span>Tasks</span>
          </div>
        </div>

        <div class="space-category">
          <div class="space">SPACES</div>

          <div class="tab" @mouseover="${this.handleTabHover}">
            <div class="space-logo">
              <img src=${this.imageUrl} alt="Leapfrog Logo" />
            </div>
            <span>Vyaguta</span>
          </div>
          <div class="tab" @mouseover="${this.handleTabHover}">
            <div class="space-logo">
              <img src=${this.imageUrl} alt="Leapfrog Logo" />
            </div>
            <span>Leapfrog</span>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'left-bar-element': LeftBarElement;
  }
}
