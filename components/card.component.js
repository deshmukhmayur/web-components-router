/* Card Web Component */
customElements.define(
  'wc-card',
  class Card extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      if (!this.shadowRoot) {
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(this.template.content);
        this.shadowRoot.querySelector('article').innerHTML = this.innerHTML;

        const styles = document.createElement('style');
        styles.innerHTML = this.styles;
        this.shadowRoot.prepend(styles);
        this.shadowRoot.styleSheets;
      }
    }

    get template() {
      const cardTemplate = document.createElement('template');
      cardTemplate.innerHTML = /* HTML */ `
        <article></article>
      `;
      return cardTemplate;
    }

    get styles() {
      return /* CSS */ `
      :host {
        display: block;
        background-color: white;
        border-radius: .25rem;
        box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);
        padding: .5rem;
        box-sizing: border-box;
        margin-bottom: .5rem;
      }
      `;
    }
  }
);
