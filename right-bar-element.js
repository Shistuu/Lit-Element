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
import { VYAGUTA, POPULAR, LEAPFROG, FOLLOWING, ANNOUNCEMENT, LEAVE_POLICY_TEXT, GITHUB_ACCESS_MAIL, PROJECT_OFF_BOARDING, SPRINT_REVIEW_2024_01_10, DISCOVER_WHATS_HAPPENING, VYAGUTA_CODING_GUIDELINES, PULSE_MODULE_DOCUMENTATION, PICK_UP_WHERE_YOU_LEFT_OFF, COMPANY_HOLIDAY_NEPAL_2023_24, VYAGUTA_BUG_REPORT_JANUARY_2024, ADDITION_OF_TEAM_MEMBERS_TO_GITHUB, OVERVIEW_OF_LEAVE_TYPES_AND_PROCESS, OVERVIEW_OF_LEAVE_TYPES_AND_PROCESSES, } from './constants/constants';
let RightBarElement = class RightBarElement extends LitElement {
    static { this.styles = css `
    .right-bar {
      height: 100vh;
      width: 80%;
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
        ${this.renderTopic(PICK_UP_WHERE_YOU_LEFT_OFF)}
        <div class="document-div">
          ${this.renderClickableBox(PULSE_MODULE_DOCUMENTATION, VYAGUTA, 'Edited 29 January 2024')}
          ${this.renderClickableBox(OVERVIEW_OF_LEAVE_TYPES_AND_PROCESS, LEAPFROG, 'Visited 24 January 2024')}
          ${this.renderClickableBox(COMPANY_HOLIDAY_NEPAL_2023_24, LEAPFROG, 'Visited 24 January 2024')}
          ${this.renderClickableBox(VYAGUTA_CODING_GUIDELINES, VYAGUTA, 'Visited 24 January 2024')}
          ${this.renderClickableBox(SPRINT_REVIEW_2024_01_10, VYAGUTA, 'Visited 12 January 2024')}
          ${this.renderClickableBox(PROJECT_OFF_BOARDING, VYAGUTA, 'Visited 11 January 2024')}
        </div>
        ${this.renderDiscoverWhatsHappening()}
      </div>
    `;
    }
    renderTopic(topic) {
        return html ` <div class="topic">${topic}</div> `;
    }
    renderClickableBox(title, project, date) {
        return html `
      <div>
        <clickable-box
          title=${title}
          project=${project}
          date=${date}
        ></clickable-box>
      </div>
    `;
    }
    renderDiscoverWhatsHappening() {
        return html `
      <div>
        ${this.renderTopic(DISCOVER_WHATS_HAPPENING)}
        <div>
          <pill-tabs>
            ${this.renderPillTab(FOLLOWING, true)}
            ${this.renderPillTab(POPULAR)} ${this.renderPillTab(ANNOUNCEMENT)}
          </pill-tabs>
          <div>
            <div class="content"><following-tab /></div>
            ${this.renderCustomBox('Anwesh Budathoki', true, '5', ADDITION_OF_TEAM_MEMBERS_TO_GITHUB, 'Nihal Maskey', VYAGUTA, GITHUB_ACCESS_MAIL, ['🔥'])}
            ${this.renderCustomBox('Jyoti Pokharel', true, '7', OVERVIEW_OF_LEAVE_TYPES_AND_PROCESSES, 'Sabnam Buddhacharya', LEAPFROG, LEAVE_POLICY_TEXT, ['👍', '👏'])}
            ${this.renderCustomBox('Dipankar Ratna Shakya', true, '30 January 2024', VYAGUTA_BUG_REPORT_JANUARY_2024, 'Dipankar Ratna Shakya', VYAGUTA, '', ['🎉'])}
          </div>
        </div>
      </div>
    `;
    }
    renderPillTab(title, active) {
        return html ` <pill-tab title=${title} ?active=${active}></pill-tab> `;
    }
    renderCustomBox(name, edited, timeAgo, documentTitle, ownerName, projectName, contentText, reactions) {
        return html `
      <div>
        <custom-box
          name=${name}
          .edited=${edited}
          timeAgo=${timeAgo}
          documentTitle=${documentTitle}
          ownerName=${ownerName}
          projectName=${projectName}
          contentText=${contentText}
          .reactions=${reactions}
        ></custom-box>
      </div>
    `;
    }
};
RightBarElement = __decorate([
    customElement('right-bar-element')
], RightBarElement);
export { RightBarElement };
//# sourceMappingURL=right-bar-element.js.map