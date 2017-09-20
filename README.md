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

![image](https://user-images.githubusercontent.com/8541009/30646361-a6509f40-9e10-11e7-9b1f-646952b130d1.png)

## Todo

Add some routing so you don't have to manually enter in the user's name.
