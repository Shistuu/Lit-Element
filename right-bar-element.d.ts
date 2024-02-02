import { LitElement } from 'lit';
import '@material/mwc-icon/mwc-icon.js';
import './clickable-box';
import './pill-tab';
import './following-tab';
import './custom-box';
export declare class RightBarElement extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private renderTopic;
    private renderClickableBox;
    private renderDiscoverWhatsHappening;
    private renderPillTab;
    private renderCustomBox;
}
declare global {
    interface HTMLElementTagNameMap {
        'right-bar-element': RightBarElement;
    }
}
//# sourceMappingURL=right-bar-element.d.ts.map