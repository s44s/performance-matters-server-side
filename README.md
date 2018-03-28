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


### Service worker
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/serviceworker.jpg "Schets")

### Custom fonts
In my project for the OBA I had used the fontawesome for a icon in a button. I changed my fontawesome to a SVG.

Result:
I saved 34ms!

Before:
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/before-font.png "Schets")

After:
![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/after-font.png "Schets")

### Gzip
Before Gzip the performance was on 61 and after the Gzip with the compression module, it changed to 93! Wow!

Also, from 6.5 kb to 1.8kb (4.7kb less)
load time: 398ms to 387ms.

Gzip saved a lot!

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/gzip-before.png "Schets")

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/gzip-after.png "Schets")

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/gzip-after2.png "Schets")

## Service-worker
### Job story:
* When I don't have a connection with the internet, or just really slow internet, I still want to be able to access my current and previously visited pages. So that I can find the information I was looking for, but couldn't finish because of the internet connection.

If the user have visited the page online before and the network in the browsers stops, the page is still available offline. You will receive an alert about the network problem. If you are going to check an other page you haven't seen before, you will get a 'offline' page back. This page will tell you that you lost your connection with the network.

After I installed the service-worker my audit Progressive Web App scores are way better than before.

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/progressivewebapp.jpg "Schets")

When the user's connection is lost, but the page was already visited. The user will receive an alert about the connection that is lost. If the user is going to browse to a new page, the user will see the offline page with the info that this paged isn't offline available.

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/serviceworker-offline-page.png "Schets")

![alt text](https://github.com/s44s/performance-matters-server-side/blob/master/public/images/serviceworker-offline-cache.png "Schets")
