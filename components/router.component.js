/* Router Web Component */
customElements.define(
  'wc-router',
  class Router extends HTMLElement {
    constructor() {
      super();
      this._activeRouteIndex = location.pathname;
      this._routes = [];

      this.querySelectorAll('wc-route').forEach(element => {
        console.log(element);
        this._routes.push(element.route);
      });

      /* Binding the methods to the component */
      this.setActiveRoute = this.setActiveRoute.bind(this);
    }

    static get observedAttributes() {
      return ['setActiveRoute', 'activeRoute'];
    }

    canSetActive(route) {
      const index = this._routes.findIndex(route);
      if (index === this._activeRouteIndex) {
        return true;
      }

      return false;
    }

    setActiveRoute(route) {
      console.log(route, this._routes);
      this._activeRouteIndex = this._routes.findIndex(route);
    }

    get activeRoute() {
      return this._routes[this._activeRouteIndex];
    }
  }
);
