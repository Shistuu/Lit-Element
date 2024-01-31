import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('following-tab')
export class FollowingTab extends LitElement {
  static override readonly styles = css`
    .top-content {
      border-radius: 10px;
      padding: 20px;
      border: 1px solid #dad6d6;
    }
    .paragraph {
      font-size: 16px;
      color: #646262;
    }
    .content {
      border-radius: 4px;
      height: 200px;
      font-size: 20px;
    }
    .button {
      cursor: pointer;
      height: 35px;
      border: 1px solid #dad6d6;
      border-radius: 4px;
      width: 80px;
      margin-top: 30px;
      font-weight: bold;
      color: #575353;
    }
  `;
  public onClick(): void {
    alert('Button clicked!');
  }
  protected override render() {
    return html`
      <div class="top-content">
        <div class="content">
          <div>
            <div></div>
            <p class="topic">We're keeping you in the loop</p>
            <p class="paragraph">
              Stay in-the-know by following people and spaces. Their activity
              will show up in your feed, but you won't receive email
              notifications about it. Add to, or edit, your feed anytime.
            </p>
          </div>
          <button class="button" onclick="${this.onClick}">Edit feed</button>
        </div>
      </div>
    `;
  }
}
