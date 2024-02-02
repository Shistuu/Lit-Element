import { LitElement } from 'lit';
import '@material/mwc-icon/mwc-icon.js';
export declare class NavbarElement extends LitElement {
    static readonly styles: import("lit").CSSResult;
    static properties: {
        imageUrl: {
            type: StringConstructor;
        };
    };
    imageUrl: string;
    render(): import("lit-html").TemplateResult<1>;
    private handleCreateClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'navbar-element': NavbarElement;
    }
}
//# sourceMappingURL=navbar-element.d.ts.map