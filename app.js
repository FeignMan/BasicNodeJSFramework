"use strict";

var http = require("http");
var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "TestApp"});

log.info("App Started");

var videoiFrame = "<p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/t0pwKzTRG5E\" frameborder=\"0\" allowfullscreen></iframe></p>";

//	Before we create a HTTP server, let's create a request handler.
//	The request handler is called once for every HTTP request made against the server.
var requestHandler = function (request, response) {
	log.info(request.method, "request received from:", request.connection.remoteAddress, "URL Requested:", request.url);
	// console.log(request.headers);

	//	Write response status code, and response headers
	//	If not specified, status code defaults to 200. Can be specified, eg. response.statusCode = 404
	//	Headers can be set individually, eg. response.setHeader("Content-Type", "text/html")
	response.writeHead(200, {
		"Content-Type": "text/html; charset=utf-8",
		"X-Powered-By": "chuck-norris"
	});

	response.write("<!DOCTYPE html><html>");
	response.write("<title>NodeSchool-Ubi</title>");
	response.write("<body>");
	response.write("<b>Hello World!</b>");
	response.write(videoiFrame);
	response.write("</body></html>");

	response.end();
};

//	http.createServer() returns a http.Server object, which is an implementation of
//	Node.js's EventEmitter type. The requestHandler is the callback for the 'request' event.
var server = http.createServer(requestHandler);
//	which is a short-hand for...
//	var server = http.createServer();
//	server.on("request", requestHandler);

server.listen(3000);

log.info("Server listening on port 80");
