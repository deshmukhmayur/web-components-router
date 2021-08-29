/* Link Web Component */
customElements.define(
  'wc-link',
  class Link extends HTMLElement {
    constructor() {
      super();
      this.tabIndex = '0';
    }

    connectedCallback() {
      if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.innerHTML;

        const styles = document.createElement('style');
        styles.innerHTML = this.styles;
        this.shadowRoot.prepend(styles);
        this.shadowRoot.styleSheets;
      }

      this.addEventListener('click', ev => {
        history.pushState({}, document.title, this.to);
        window.dispatchEvent(new Event('WCNavigate', { bubbles: true }));
      });
    }

    get to() {
      return this.getAttribute('to');
    }

    get styles() {
      return /* CSS */ `
        :host {
          color: blue;
          text-decoration: underline;
          cursor: pointer;
          display: inline;
        }
        :host(:hover), :host(:focus) {
          color: dodgerblue;
        }
        :host(:focus) {
          outline-color: dodgerblue;  
        }
      `;
    }
  }
);
