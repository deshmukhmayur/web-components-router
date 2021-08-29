/* Route Web component */
customElements.define(
  'wc-route',
  class Route extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' });
        if (this.isRouteActive) {
          this.hidden = false;
        } else {
          this.hidden = true;
        }
        this.shadowRoot.innerHTML = this.innerHTML;
      }

      window.addEventListener('WCNavigate', ev => {
        if (this.isRouteActive) {
          this.hidden = false;
        } else {
          this.hidden = true;
        }
      });
    }

    static get observedAttributes() {
      return ['path'];
    }

    get path() {
      return this.getAttribute('path');
    }
    get exact() {
      return (
        this.hasAttribute('exact') && this.getAttribute('exact') !== 'false'
      );
    }

    get matcher() {
      let regexp = '^' + this.path;
      if (this.exact) {
        regexp += '$';
      }
      return new RegExp(regexp, 'i');
    }

    get isRouteActive() {
      return this.matcher.test(location.pathname);
    }
  }
);
