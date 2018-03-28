# Protest app server-side
This project is a minimized server-side version of the [OBA project](https://github.com/s44s/project1-quick-hack-prototype). As a minimum viable product (MVP), its main task is to show a list of posters and tweets relate to a district in Amsterdam. You can compare the views of the population in time.

Website live on: https://performacematters.suustenvoorde.me/

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
- [x] Bundling server side JS: CommonJS & Browserify

## Performance

### From client-side to server-side
From client-side to server-side saved a lot already. From a load from 1.25s to 386s on the second refresh on the server-side. This is because I saved the data in a variable. I didn't do this yet on the client-side version.

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/pjimage.jpg "Schets")

### JS minify

### CSS minify

### Custom fonts
In my project for the OBA I had used the fontawesome for a icon in a button. I changed my fontawesome to a SVG.

Result:
I saved 34ms and 3.5kb!

Before:
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/before-font.jpg "Schets")

After:
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/after-font.jpg "Schets")

### Service worker
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/serviceworker.jpg "Schets")

## Service-worker
### Job story:
* When I don't have a connection with the internet, or just really slow internet, I still want to be able to access my current and previously visited pages. So that I can find the information I was looking for, but couldn't finish because of the internet connection.

If the user have visited the page online before and the network in the browsers stops, the page is still available offline. You will receive an alert about the network problem. If you are going to check an other page you haven't seen before, you will get a 'offline' page back. This page will tell you that you lost your connection with the network.

After I installed the service-worker my audit Progressive Web App scores are way better than before.

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/progressivewebapp.jpg "Schets")
