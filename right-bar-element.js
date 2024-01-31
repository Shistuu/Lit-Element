var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/mwc-icon/mwc-icon.js';
import './clickable-box';
import './pill-tab';
import './following-tab';
let RightBarElement = class RightBarElement extends LitElement {
    static { this.styles = css `
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
    .pill-tabs {
      width: 300px;
    }

    .content {
      padding: 16px;
      border: 1px solid #ccc;
      margin-top: 16px;
    }
  `; }
    render() {
        return html `
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
              <pill-tab title="Following">
                <mwc-icon>arrow_back</mwc-icon>
                <div class="content"><following-tab /></div>
              </pill-tab>
              <pill-tab title="Popular">
                <div class="content">Content for Tab 2</div>
              </pill-tab>
              <pill-tab title="Announcement">
                <div class="content">Content for Tab 3</div>
              </pill-tab>
            </pill-tabs>
          </div>
        </div>
      </div>
    `;
    }
};
RightBarElement = __decorate([
    customElement('right-bar-element')
], RightBarElement);
export { RightBarElement };
//# sourceMappingURL=right-bar-element.js.map