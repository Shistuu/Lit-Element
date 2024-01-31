import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './navbar-element';
import './left-bar-element';
import './right-bar-element';

@customElement('main-page')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
        'Noto Sans', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
    }

    .content {
      display: flex;
      width: 100%;
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
