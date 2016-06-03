/**
 * Created by macbookpro on 5/11/16.
 */
//@description: this file provides basic RESTful APIs using core NodeJS platform

(function () {

  'use strict';

  /*node modules*/
  var http = require('http');

  /*custom modules*/


  /*locals*/
  var PORT, APIs, todos, server;

  PORT = 3000;

  todos = [{
    id: 1,
    text: 'Buy Milk'
  }, {
    id: 2,
    text: 'Do assignment'
  }];


  /*APIs list*/
  APIs = {
    GET: {
      '/': getHomeHandler,
      '/todos': getTodoListHandler
    },
    POST: {
      '/todos': addTodoHandler
    }
  };

  /*server initialization*/
  //Create a server
  server = http.createServer(handleRequest);

  //Lets start our server
  server.listen(PORT, function () {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
  });


  /*function declarations*/

  //We need a function which handles requests and send response
  function handleRequest(request, response) {
    var APIHandler;

    //Allow CORS
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    APIHandler = APIs[request.method][request.url];

    APIHandler ? APIHandler(request, response) : defaultHandler(request, response);
  }

  // Unknown API/endpoint handler
  function defaultHandler(request, response) {
    response.write('unknown endpoint.');
    response.end();
  }

  //GET => '/'
  function getHomeHandler(request, response) {

    response.setHeader("content-type", "text/html");

    response.write('Welcome to Todo App !');
    response.end();
  }

  // GET => '/todos'
  function getTodoListHandler(request, response) {

    //set JSON as a content type for RESTful
    response.setHeader("content-type", "application/json");

    response.write(JSON.stringify(todos));
    response.end();
  }

  // POST => '/todos'
  function addTodoHandler(request, response) {
    var todo;

    todo = '';

    //retrieve todo item from the payload
    request.on('data', function (chunk) {
      todo += chunk;
    });

    request.on('end', function() {
      todo = JSON.parse(todo);


      //set JSON as a content type for RESTful
      response.setHeader("content-type", "application/json");

      //add new todo into todo list
      todos.push(todo);

      //send back the newly created todo
      //response.write( JSON.stringify(todo);
      response.write( JSON.stringify(todos[todos.length -1]) );
      response.end();

    });
  }

})();