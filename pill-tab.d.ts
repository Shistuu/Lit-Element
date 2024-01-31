import { LitElement, PropertyValues } from 'lit';
export declare class PillTab extends LitElement {
    title: string;
    active: boolean;
    static readonly styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
    protected update(changedProperties: PropertyValues): void;
    private handleTabClick;
}
export declare class PillTabs extends LitElement {
    static readonly styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
    closeOtherTabs(selectedTab: PillTab): void;
}
//# sourceMappingURL=pill-tab.d.ts.map