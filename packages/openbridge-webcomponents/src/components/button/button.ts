import {LitElement, html} from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import iconStyle from './button.style';
import {classMap} from 'lit/directives/class-map.js';

@customElement('obc-button')
export class ObcButton extends LitElement {
  @property({type: String}) icon = '01-placeholder';
  @property({type: String}) variant = 'normal';
  @property({type: String}) size = 'regular';
  @property({type: Boolean, attribute: 'full-width'}) fullWidth = false;
  @property({type: Boolean, attribute: 'hug-text'}) hugText = false;
  @property({type: Boolean}) checked = false;
  @property({type: Boolean}) disabled = false;

  @queryAssignedElements({slot: 'leading-icon'})
  leadingIcon!: NodeListOf<HTMLElement>;
  @queryAssignedElements({slot: 'trailing-icon'})
  trailingIcon!: NodeListOf<HTMLElement>;
  @state() hasIconLeading = false;
  @state() hasIconTrailing = false;

  override firstUpdated() {
    this.hasIconLeading = this.leadingIcon.length > 0;
    this.hasIconTrailing = this.trailingIcon.length > 0;
  }

  override render() {
    return html`
      <button
        class=${classMap({
          wrapper: true,
          ['variant-' + this.variant]: true,
          ['size-' + this.size]: true,
          hasIconLeading: this.hasIconLeading,
          hasIconTrailing: this.hasIconTrailing,
          'full-width': this.fullWidth,
          'hug-text': this.hugText,
          checked: this.checked,
        })}
        ?disabled=${this.disabled}
      >
        <div class="visible-wrapper">
          <span class="icon leading"><slot name="leading-icon"></slot></span>
          <span class="label"><slot></slot></span>
          <span class="icon trailing"><slot name="trailing-icon"></slot></span>
        </div>
      </button>
    `;
  }

  static override styles = iconStyle;
}

declare global {
  interface HTMLElementTagNameMap {
    'obc-button': ObcButton;
  }
}
