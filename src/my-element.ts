import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './navbar-element';
import './left-bar-element';
import './right-bar-element';

@customElement('my-element')
export class MyElement extends LitElement {
  static override readonly styles = css`
    :host {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
      margin: 0;
      padding: 0;
    }

    .content {
      display: flex;
      width: 100%;
    }
    left-bar-element {
      padding-left: 100px;
    }
  `;

  override render() {
    return html`
      <div class="container">
        <navbar-element></navbar-element>
        <div class="content">
          <left-bar-element></left-bar-element>
          <right-bar-element></right-bar-element>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
