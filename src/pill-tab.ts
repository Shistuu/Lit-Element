import {LitElement, html, css, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('pill-tab')
export class PillTab extends LitElement {
  @property({type: String}) title: string;
  @property({type: Boolean, reflect: true}) active = false;

  static override styles = css`
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
  `;

  protected override render() {
    return html`
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

  protected override update(changedProperties: PropertyValues): void {
    super.update(changedProperties);

    // Close other tabs when a new one is opened
    if (changedProperties.has('active') && this.active) {
      const tabs = this.closest('pill-tabs');
      if (tabs) {
        tabs.closeOtherTabs(this);
      }
    }
  }

  private handleTabClick(): void {
    this.active = true;
    this.dispatchEvent(
      new CustomEvent('tab-click', {bubbles: true, composed: true})
    );
  }
}

@customElement('pill-tabs')
export class PillTabs extends LitElement {
  static override styles = css`
    :host {
      display: flex;
    }
  `;

  protected override render() {
    return html`<slot></slot>`;
  }

  closeOtherTabs(selectedTab: PillTab): void {
    this.querySelectorAll('pill-tab').forEach((tab) => {
      if (tab !== selectedTab && tab instanceof PillTab) {
        tab.active = false;
      }
    });
  }
}
