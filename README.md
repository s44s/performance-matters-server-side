# Protest app server-side

This project is a minimized server-side version of the [OBA project](https://github.com/s44s/project1-quick-hack-prototype). As a minimum viable product (MVP), its main task is to show a list of posters and tweets relate to a district in Amsterdam. You can compare the views of the population in time.

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/app.png "Schets")

## How to build
First of all, clone the repo `git clone`

Install dependencies and build all the js files

```
npm install
npm build
```

Run `npm start` to start the server on port 3000. Nodemon is already setup in the npm start script, so your files are updated automatically.

## Features and tooling

- [x] Works without JavaScript
- [x] Works offline: Service worker (if you have visit the page online before)
- [x] Server: express
- [x] Templating: EJS
- [x] Bundling server side: CommonJS
- [x] Bundling client side: Browserify

## Performance

### From client-side to server-side
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/pjimage.jpg "Schets")

### JS minify

### CSS minify

### Custom fonts

### Service worker
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/serviceworker.jpg "Schets")

## Service-worker
Job story/user story:

If the user have visited the page online before and the network in the browsers stops, the page is still available offline. You will receive an alert about the network problem. If you are going to check an other page you haven't seen before, you will get a 'offline' page back. This page will tell you that you lost your connection with the network.
