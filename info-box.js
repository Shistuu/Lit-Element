import { LitElement, html, css } from 'lit';
class CustomBox extends LitElement {
    static { this.styles = css `
    /* Add your CSS styles here */
    .box {
      border: 1px solid #ccc;
      padding: 16px;
      margin: 16px;
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

    .content {
      display: flex;
      align-items: center;
      margin: 8px 0;
    }

    .icon {
      width: 24px;
      height: 24px;
      fill: blue; /* or your desired color */
      margin-right: 8px;
    }

    .text {
      margin-bottom: 8px;
    }

    .reactions {
      display: flex;
      margin-top: 8px;
    }

    .reaction {
      margin-right: 8px;
    }
  `; }
    static { this.properties = {
        name: { type: String },
        edited: { type: Boolean },
        timeAgo: { type: String },
        documentTitle: { type: String },
        ownerName: { type: String },
        projectName: { type: String },
        contentText: { type: String },
        emojis: { type: Array },
        reactions: { type: Array },
    }; }
    render() {
        return html `
      <div class="box">
        <div class="header">
          <div>
            <span>${this.name}</span>
            ${this.edited ? html `<span>edited</span>` : ''}
            <span>${this.timeAgo} hours ago</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="content">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M21 2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16H7V6h14v12zM7 2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H7z"
            />
          </svg>
          <div>
            <div>${this.documentTitle}</div>
            <div>Owned by ${this.ownerName} - Project: ${this.projectName}</div>
          </div>
        </div>
        <div class="text">${this.contentText}</div>
        <div class="reactions">
          ${this.reactions.map((reaction) => html `<span class="reaction">${reaction}</span>`)}
        </div>
      </div>
    `;
    }
}
customElements.define('info-box', CustomBox);
//# sourceMappingURL=info-box.js.map