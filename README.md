# CSS Grid Presentation

Presentation that walks through getting started with [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/). It was created and presented in March 2020.

## [View the CSS Grid Presentation](https://rdeprey.github.io/css-grid-presentation/?immediate=true&slide=0&slideElement=-1)

## Run the Presentation Locally

This presentation was built with Spectacle. [Spectacle Docs](https://github.com/FormidableLabs/spectacle/blob/master/README.md)

1. Install dependencies

   ```sh
   $ npm install
   ```

2. Start the webpack server. The server will run at the default `webpack-dev-server` address, [`localhost:8080`](http://localhost:8080).

   ```sh
   $ npm run start

   # Or with a specific port!
   $ npm run start --port=3000
   ```

3. Open `http://localhost:3000` in your browser.

## Build and Deploy the Presentation

Building the dist version of the project is as easy as running

```sh
$ npm run build
```

From there you can deploy the built slides in `dist` to services like Netlify, Surge, etc!
