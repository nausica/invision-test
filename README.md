============
invision-challenge
============

## Stack

* Awesome [AngularJS](http://www.angularjs.org/) on the client
* Build powered by [Grunt.js](http://gruntjs.com/)
* LESS templates processing integrated into the build

## Installation

### Platform & tools

You need to install the package manager called [npm](http://npmjs.org) that comes with Node.js

* Install Grunt-CLI as global npm module:

    ```
    npm install -g grunt-cli
    ```

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/invision-test/invision-test.git
cd invision-test
```

### Client App

Our client application is a straight HTML/Javascript application but our development process uses a Node.js build tool
[Grunt.js](gruntjs.com). Grunt relies upon some 3rd party libraries that we need to install as local dependencies using npm.

* Install local dependencies (from the project root folder):

    ```
    cd client
    npm install
    cd ..
    ```
    (This will install the dependencies declared in the client/package.json file)

### Build the client app
The app made up of a number of javascript, css and html files that need to be merged into a final distribution for running.  We use the Grunt build tool to do this.
* Build client application:

    ```
    cd client
    grunt build
    cd ..
    ```
## Running
### Start the fake server
```
    cd client
    grunt open-server
    cd ..
    ```
* Browse to the application at [http://localhost:1337]
