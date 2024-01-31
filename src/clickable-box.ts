import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('clickable-box')
export class ClickableBox extends LitElement {
  @property({type: String})
  title: string;

  @property({type: String})
  project: string;

  @property({type: String})
  date: string;
  declare foo: string;
  static override styles = css`
    .custom-box {
      display: flex;
      padding: 26px;
      border: 1px solid grey;
      background-color: white;
      box-shadow: var(
        --ds-shadow-raised,
        0px 1px 1px rgba(9, 30, 66, 0.25),
        0px 0px 1px rgba(9, 30, 66, 0.31)
      );
      width: 13vw;
      cursor: pointer;
    }
    .box-top {
      display: flex;
      gap: 12px;
    }

    .project-details {
      display: flex;
      flex-direction: column;
    }
    .custom-title {
      color: #172b4d;
      font-weight: bold;
    }

    .custom-project {
      color: var(--ds-text-subtle, #6b778c);
      font-size: 12px;
    }

    .custom-date {
      color: var(--ds-text-subtle, #6b778c);
      /* margin-top: 8px;
       */
      font-size: 10px;
    }
  `;
  constructor() {
    super();
    this.title = '';
    this.project = '';
    this.date = '';
  }

  protected override render() {
    return html`
      <div class="custom-box" @click="${this.handleClick}">
        <div class="box-top">
          <div class="custom-icon">
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
          <div class="project-details">
            <div class="custom-title">${this.title}</div>
            <div class="custom-project">${this.project}</
          </div>
        </div>
        <div class="custom-date">Edited ${this.date}</div>
      </div>
    `;
  }

  private handleClick() {
    alert(`Document: ${this.title} clicked`);
  }
}
