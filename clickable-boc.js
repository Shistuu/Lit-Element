var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, property } from 'lit';
import { customElement } from 'lit/decorators.js';
let ClickableBox = class ClickableBox extends LitElement {
    title = '';
    project = '';
    date = '';
    static styles = css `
    .custom-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      border: 1px solid var(--ds-border, #dfe1e6);
      background-color: var(--ds-surface, #ffffff);
      box-shadow: var(
        --ds-shadow-raised,
        0px 1px 1px rgba(9, 30, 66, 0.25),
        0px 0px 1px rgba(9, 30, 66, 0.31)
      );
      cursor: pointer;
    }

    .custom-icon {
      margin-right: 6px;
    }

    .custom-title {
      color: var(--ds-text, #172b4d);
    }

    .custom-project {
      color: var(--ds-text-subtle, #6b778c);
      margin-top: 4px;
    }

    .custom-date {
      color: var(--ds-text-subtle, #6b778c);
      margin-top: 8px;
    }
  `;
    render() {
        return html `
      <div class="custom-box" @click="${this.handleClick}">
        <div class="custom-icon">
          <span aria-hidden="true" class="cc-1afrefi">
            <!-- Replace this with your own icon or use an icon library -->
            <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <path
                fill="#2684FF"
                fill-rule="evenodd"
                d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1 18c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01c-.54 0-.995.448-.995 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1z"
              ></path>
            </svg>
          </span>
        </div>
        <div class="custom-title">${this.title}</div>
        <div class="custom-project">${this.project}</div>
        <div class="custom-date">Edited ${this.date}</div>
      </div>
    `;
    }
    handleClick() {
        alert(`Document: ${this.title} clicked`);
    }
};
__decorate([
    property({ type: String })
], ClickableBox.prototype, "title", void 0);
__decorate([
    property({ type: String })
], ClickableBox.prototype, "project", void 0);
__decorate([
    property({ type: String })
], ClickableBox.prototype, "date", void 0);
ClickableBox = __decorate([
    customElement('clickable-box')
], ClickableBox);
export { ClickableBox };
//# sourceMappingURL=clickable-boc.js.map