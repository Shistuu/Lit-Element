import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('right-bar-element')
export class RightBarElement extends LitElement {
  static override styles = css`
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

  override render() {
    return html` <div class="right-bar">PICK UP WHERE YOU LEFT OFF</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'right-bar-element': RightBarElement;
  }
}
