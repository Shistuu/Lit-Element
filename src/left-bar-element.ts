import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('left-bar-element')
export class LeftBarElement extends LitElement {
  static override styles = css`
    .left-bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      z-index: 1;
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
  `;
  private handleTabHover() {
    console.log('Tab hovered');
  }

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'left-bar-element': LeftBarElement;
  }
}
