"use strict";

var express = require("express");
var app = express();
app.set("port", 3001);

var videoiFrame = "<p><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/t0pwKzTRG5E\" frameborder=\"0\" allowfullscreen></iframe></p>";

app.get("/", function(request, response) {
	console.log(request.method, "request received from:", request.connection.remoteAddress, "URL:", request.url);
	console.log("Request Headers:", request.headers);

	response.header("Content-Type", "text/html; charset=utf-8");
	response.header("X-Powered-By", "chuck-norris");
	response.write("<!DOCTYPE html><html>");
	response.write("<title>NodeSchool-Ubi</title>");
	response.write("<body>");
	response.write("<b>Hello World!</b>");
	response.write(videoiFrame);
	response.end("</body></html>");
});

app.get("/ping", function(resquest, response) {
	response.end("pong");
});

app.listen(app.get("port"), function() {
	console.log("Server listening on port:", app.get("port"));
});