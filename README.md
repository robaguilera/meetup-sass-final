## Grunt Susy Starter 

This is a starter project template that we will use to create a working Sass and Grunt Workflow.  We'll have what we need so Grunt will compile our Sass into CSS.  We will also have the option to have a live server running that will autorefresh our changes as we work through our project.

## Project Setup  

1. Clone the repo and install bower

~~~
git clone https://github.com/robertaguilerajr/grunt-sass-starter-virgin.git
npm install bower
~~~

2. Initialize the bower and package json files

~~~
npm init
bower init
~~~

3. Install Node dependencies 

~~~
$ npm install grunt-sass --save-dev
$ npm install grunt-contrib-watch --save-dev
$ npm install grunt-contrib-connect --save-dev
~~~

4. Install Bower dependencies

~~~
$ bower install bourbon
$ bower install neat
~~~

## Usage 

The gruntfile in this project is setup to run `grunt-sass`, use `grunt` to watch the file and compile
It's also configured to run 'grunt-connect', use `grunt server` to watch the file and create a live preview at localhost:3000

~~~
$ grunt
$ grunt server
~~~

That's it!
