var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let CustomBox = class CustomBox extends LitElement {
    static { this.styles = css `
    .box {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 12px;
      border-radius: 10px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .line {
      border-top: 1px solid #ccc;
      margin: 8px 0;
    }
    .name {
      font-weight: 600;
    }
    .content {
      display: flex;
      align-items: center;
      margin: 8px 0;
      font-size: 16px;
      font-weight: 600;
    }

    .icon {
      width: 18px;
      height: 18px;
      margin-right: 20px;
    }
    .edit-date-text {
      font-size: 12px;
      color: #3e3f44;
    }
    .name-project {
      font-size: 14px;
      padding-bottom: 20px;
      color: #3e3f44;
    }
    .text {
      margin-bottom: 10px;
    }

    .reactions {
      display: flex;
      margin-top: 10px;
    }

    .reaction {
      border: 1px solid lightgrey;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      margin-right: 8px;
      padding: 3px 10px 3px 10px;
    }
  `; }
    constructor() {
        super();
        this.name = '';
        this.edited = false;
        this.timeAgo = '';
        this.documentTitle = '';
        this.ownerName = '';
        this.projectName = '';
        this.contentText = '';
    }
    render() {
        return html `
      <div class="box">
        <div class="header">
          <div>
            <span class="name">${this.name}</span>
            ${this.edited
            ? html `<span class="edit-date-text">edited • </span>`
            : ''}
            <span class="edit-date-text">${this.timeAgo} hours ago</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="content">
          <div class="icon">
            <span aria-hidden="true" class="cc-1afrefi">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="presentation"
              >
                <path
                  fill="#2684FF"
                  fill-rule="evenodd"
                  d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm1 18c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01c-.54 0-.995.448-.995 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1z"
                ></path>
              </svg>
            </span>
          </div>
          <div>
            <div>${this.documentTitle}</div>
          </div>
        </div>
        <div class="name-project">
          Owned by ${this.ownerName} • ${this.projectName}
        </div>
        <div class="text">${this.contentText}</div>
        <div class="reactions">
          ${this.reactions.map((reaction) => html `<span class="reaction">${reaction}</span>`)}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], CustomBox.prototype, "name", void 0);
__decorate([
    property({ type: Boolean })
], CustomBox.prototype, "edited", void 0);
__decorate([
    property({ type: String })
], CustomBox.prototype, "timeAgo", void 0);
__decorate([
    property({ type: String })
], CustomBox.prototype, "documentTitle", void 0);
__decorate([
    property({ type: String })
], CustomBox.prototype, "ownerName", void 0);
__decorate([
    property({ type: String })
], CustomBox.prototype, "projectName", void 0);
__decorate([
    property({ type: String })
], CustomBox.prototype, "contentText", void 0);
__decorate([
    property({ type: Array })
], CustomBox.prototype, "emojis", void 0);
__decorate([
    property({ type: Array })
], CustomBox.prototype, "reactions", void 0);
CustomBox = __decorate([
    customElement('custom-box')
], CustomBox);
export { CustomBox };
//# sourceMappingURL=custom-box.js.map