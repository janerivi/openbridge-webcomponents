import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import compentStyle from './navigation-menu.style';

@customElement('obc-navigation-menu')
export class ObcNavigationMenu extends LitElement {
  override render() {
    return html`
      <div class="wrapper">
        <nav class="main">
          <ol>
            <slot name="main"></slot>
          </ol>
        </nav>
        <div class="footer">
          <nav>
            <ol>
              <slot name="footer"></slot>
            </ol>
          </nav>
          <div class="logo">
            <slot name="logo"></slot>
          </div>
        </div>
      </div>
    `;
  }

  static override styles = compentStyle;
}

declare global {
  interface HTMLElementTagNameMap {
    'obc-navigation-menu': ObcNavigationMenu;
  }
}
