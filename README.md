# Router Web Component using only Vanilla JS

This is an experiment for creating a react-router like component in Vanilla JS, using Web Webcomponents.

To view the live demo and test the code, fork my [Stackblitz project](https://stackblitz.com/edit/js-router-rmqjlt).

## How to use the components?

Encapsulate the elements you want to be shown on a specific url in a `<wc-route>` element.

```html
<!-- Home page with `/` and exact match -->
<wc-route path="/" exact>
  Home
</wc-route>

<!-- Page 1 with exact -->
<wc-route path="/page-1" exact>
  Page 1
</wc-route>

<!-- Non-exact route for everything that starts with `/abc` -->
<wc-route path="/abc">
  Global catch
</wc-route>
```

You can also use the `<wc-link>` component to make use of the javascript routing.
```html
<wc-link to="/path/to/another/page">Take me to another page</wc-link>
```

## License

This project is lincensed under the [MIT license](LICENSE). Feel free to fork it!