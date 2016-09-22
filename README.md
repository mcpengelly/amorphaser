# Overview
## amorphaser
Prototyping a tribute to an old game using typescript and phaserjs. link > http://www.kongregate.com/games/innocuousgames/amorphous

# Getting started (you'll need nodejs installed)
- clone this repository
- cd to the project root
- run ```npm install && bower install``` to install project dependencies
- you'll need to install grunt, bower, and http-server globally as well which you can do using:
```
npm install -g grunt bower http-server
```
- run ```grunt dev``` this step transpiles typescript into javascript and places it in the public directory
- run ```http-server public``` starts a file server which serves up our html w/ attached phaser canvas
- open your browser and point it at: ```https://localhost:8080```

### If you want to contribute please see CONTRIBUTIONS.md


#### todos
- test sourcemapped typescript files in IE debugger, find out if its possible to get working in chrome/chrome canary
- unit tests?
