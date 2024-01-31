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
import './custom-box';
let RightBarElement = class RightBarElement extends LitElement {
    static { this.styles = css `
    :host {
      flex: 1;
    }
    .right-bar {
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
            <div>
              <div class="content"><following-tab /></div>
              <div>
                <custom-box
                  name="Anwesh Budathoki"
                  edited
                  timeAgo="5"
                  documentTitle="Addition of team members to github"
                  ownerName="Nihal Maskey"
                  projectName="Vyaguta"
                  contentText="This mail is to be sent by either Project Manager or Team lead of Vyaguta to IT department to provide access to our GitHub Organization."
                  .reactions=${['🔥']}
                ></custom-box>
              </div>
              <div>
                <custom-box
                  name="Jyoti Pokharel"
                  edited
                  timeAgo="7"
                  documentTitle="Overview of Leave types and processes"
                  ownerName="Sabnam Buddhacharya"
                  projectName="Leapfrog"
                  contentText="Leave is not a matter of right but merely a facility given by the company. In the event of necessity, the company may recall the employee on leave. No employees shall leave without getting prior approval from their direct supervisor at least two days in advance and approved in writing. Please follow the standard LEAVE APPLICATION PROCESS."
                  .reactions=${['👍', '👏']}
                ></custom-box>
              </div>
              <div>
                <custom-box
                  name="Dipankar Ratna Shakya"
                  edited
                  timeAgo="30 January 2024"
                  documentTitle="Vyaguta Bug Report of January 2024 based on Bug Categories"
                  ownerName="Dipankar Ratna Shakya"
                  projectName="Vyaguta"
                  contentText=""
                  .reactions=${['🎉']}
                ></custom-box>
              </div>
            </div>
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