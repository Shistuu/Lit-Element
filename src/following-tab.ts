import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import '@material/mwc-icon/mwc-icon';

import {
  LOOP_TOPIC,
  LEAPFROG_LOGO,
  EDIT_FEED_TEXT,
  LOOP_PARAGRAPH,
} from './constants/constants';

@customElement('following-tab')
export class FollowingTab extends LitElement {
  static override readonly styles = css`
    .top-content {
      border-radius: 10px;
      padding: 0 0px 15px 20px;
      border: 1px solid #dad6d6;
    }
    .icon {
      display: flex;
      justify-content: flex-end;
      padding: 10px 10px 0 0;
      height: 5px;
      cursor: pointer;
    }

    .button {
      cursor: pointer;
      border: 1px solid #dad6d6;
      border-radius: 4px;
      padding: 10px;
      margin-top: 10px;
      font-weight: bold;
      color: #575353;
    }

    .content {
      display: flex;
      align-items: center;
      border-radius: 4px;
      font-size: 18px;

      img {
        display: flex;
        height: 156px;
        width: 156px;
        margin-right: 50px;
      }
    }

    .paragraph {
      font-size: 13px;
    }
  `;
  public onClick(): void {
    alert('Button clicked!');
  }

  static override readonly properties = {
    imageUrl: {type: String},
  };

  imageUrl = '../dev/assets/net.jpg';

  protected override render() {
    return html`
      <div class="top-content">
        <mwc-icon class="icon">close</mwc-icon>
        <div class="content">
          <div>
            <div>
              ${LOOP_TOPIC}
              <p class="paragraph">${LOOP_PARAGRAPH}</p>
            </div>
            <button class="button" @click="${this.onClick}">
              ${EDIT_FEED_TEXT}
            </button>
          </div>
          <div>
            <img src=${this.imageUrl} alt=${LEAPFROG_LOGO} />
          </div>
        </div>
      </div>
    `;
  }
}
