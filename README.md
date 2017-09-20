# React Chat App

Simple application with a Redux front end and a simple websocket server that
broadcasts users' messages to every websocket instance. Largely did this for
revision.

## How to use

Install dependencies

    $ npm i

Start webpack

    $ ./node_modules/.bin/webpack-dev-server

Start the socket server

    $ node app/server.js

Open up a browser window at `http://localhost:8080/?user=<name_1>` and another
at `http://localhost:8080/?user=<other_name>`. And type stuff into the box :)


## Todo

Add some routing so you don't have to manually enter in the user's name.
