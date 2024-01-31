import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/mwc-icon/mwc-icon.js';

import './clickable-box';
import './pill-tab';
import './following-tab';

@customElement('right-bar-element')
export class RightBarElement extends LitElement {
  static override styles = css`
    :host {
      flex: 1;
    }
    .right-bar {
      background-color: yellow;
      height: 100vh;
      width: 75%;
    }

    .document-div {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 10px;
      padding: 10px;
    }
    .topic {
      padding: 40px 0 10px 16px;
      font-weight: 600;
      color: #37471f;
    }

    .content {
      padding: 10px;
    }
  `;

  override render() {
    return html`
      <div class="right-bar">
        <div class="topic">PICK UP WHERE YOU LEFT OFF</div>
        <div class="document-div">
          <div>
            <clickable-box
              title="Pulse Module Documentation"
              project="Vyaguta"
              date="Edited 29 January 2024"
            />
          </div>
          <div>
            <clickable-box
              title="Overview of Leave types and process"
              project="Leapfrog"
              date="Visited 24 January 2024"
            />
          </div>
          <div>
            <clickable-box
              title="Company Holiday (Nepal) || 2023/24"
              project="Leapfrog"
              date="Visited 24 January 2024"
            />
          </div>
          <div>
            <clickable-box
              title="Vyaguta Coding Guidelines"
              project="Vyaguta"
              date="Visited 24 January 2024"
            />
          </div>
          <div>
            <clickable-box
              title="2024-01-10 Sprint Review"
              project="Vyaguta"
              date="Visited 12 January 2024"
            />
          </div>
          <div>
            <clickable-box
              title="Project Off-boarding"
              project="Vyaguta"
              date="Visited 11 January 2024"
            />
          </div>
        </div>
        <div>
          <div class="topic">DISCOVER WHAT'S HAPPENING</div>

          <div>
            <pill-tabs>
              <pill-tab title="Following" active>
                <!-- <mwc-icon>arrow_back</mwc-icon> -->
              </pill-tab>
              <pill-tab title="Popular">
                <div class="content">Content for Tab 2</div>
              </pill-tab>
              <pill-tab title="Announcement">
                <div class="content">Content for Tab 3</div>
              </pill-tab>
            </pill-tabs>
            <div class="content"><following-tab /></div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'right-bar-element': RightBarElement;
  }
}
