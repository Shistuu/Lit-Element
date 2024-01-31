import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './clickable-box';

@customElement('right-bar-element')
export class RightBarElement extends LitElement {
  static override styles = css`
    :host {
      width: 75%;
      flex: 1;
    }
    .right-bar {
      background-color: yellow;
      height: 100vh;
      flex: 1;
    }
  `;

  override render() {
    return html`
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
}

declare global {
  interface HTMLElementTagNameMap {
    'right-bar-element': RightBarElement;
  }
}
