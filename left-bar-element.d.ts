import { LitElement } from 'lit';
import '@material/mwc-icon/mwc-icon.js';
export declare class LeftBarElement extends LitElement {
    static readonly styles: import("lit").CSSResult;
    static readonly properties: {
        imageUrl: {
            type: StringConstructor;
        };
    };
    imageUrl: string;
    private handleTabHover;
    render(): import("lit-html").TemplateResult<1>;
    private renderTab;
    private renderSpaceTab;
}
declare global {
    interface HTMLElementTagNameMap {
        'left-bar-element': LeftBarElement;
    }
}
//# sourceMappingURL=left-bar-element.d.ts.map