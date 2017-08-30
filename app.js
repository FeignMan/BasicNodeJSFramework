"use strict";

var http = require("http");
var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "TestApp"});

log.info("App Started");

var htmlStart = "<!DOCTYPE html><html><body>";
var videoiFrame = "<p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/t0pwKzTRG5E\" frameborder=\"0\" allowfullscreen></iframe></p>";
var htmlEnd = "</body></html>";

//	Before we create a HTTP server, let's create a request handler.
//	The request handler is called once for every HTTP request made against the server.
var requestListener = function (req, res) {
	log.info(req.method, "request received from:", req.connection.remoteAddress);
	// console.log(req);

	res.writeHead(200);
	var respStr = htmlStart;
	respStr += "<b>Hello World!<b>";
	respStr += videoiFrame;
	respStr += htmlEnd;

	res.end(respStr);
};

//	http.createServer() returns a http.Server object, which is an implementation of
//	Node.js's EventEmitter type. The requestListener is the handler for the 'request' event.
var server = http.createServer(requestListener);
//	which is a short-hand for...
//	var server = http.createServer();
//	server.on("request", requestHandler);

server.listen(3000);

log.info("Server listening on port 80");
