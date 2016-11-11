# Frontend

Goodcode is a single page app.
It uses React.js to render DOM elements and makes ajax requests to a rails server to asynchronously retrieve the information it wants to render.
This is a partial list of the technologies used to to create the Goodcode frontend.

* **React.js** is the frontend framework used to build the entire UI.
* **React Router** is used to keep the url in sync with the page being viewed.
* **Redux** is used to keep track of client-side data, pass information between React components, and trigger ajax calls.
* **Material-ui:** many components (buttons, text-fields, modals, etc.) from material-ui are used to give the site a clean, responsive feel.
Custom styling of these components was done using a custom material-ui theme and custom styles.
* **React-infinite-scroller** is used to fetch new data as the user nears the bottom of the programs index component, giving the experience of infinite scroll.
* **lodash:** in particular the lodash debounce function was used to debounce the search feature.
* **npm** is used to manage node package dependencies.
* **webpack** is used to bundle and minify javascript files.
* **Babel** is used to transpile jsx files into javascript.
* **jQuery** is used only for ajax calls.
* **Sass** is used to help manage CSS styling.

