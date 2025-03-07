import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import compentStyle from './notification-message.style';
import {classMap} from 'lit/directives/class-map.js';

@customElement('obc-notification-message')
export class ObcNotificationMessage extends LitElement {
  @property({type: Boolean}) large = false;
  @property({type: Boolean, attribute: 'empty'}) empty = false;

  override render() {
    return html`
      <button
        class=${classMap({
          wrapper: true,
          empty: this.empty,
          large: this.large,
        })}
      >
        <div class="message-wrapper">
          <slot></slot>
          ${this.empty
            ? html`<div class="empty-wapper"><slot name="empty"></slot></div>`
            : null}
        </div>
      </button>
    `;
  }

  static override styles = compentStyle;
}

declare global {
  interface HTMLElementTagNameMap {
    'obc-notification-message': ObcNotificationMessage;
  }
}
