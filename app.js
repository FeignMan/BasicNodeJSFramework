"use strict";

var bunyan = require("bunyan");
var log = bunyan.createLogger({name: "TestApp"});

log.info("App Started");
log.info("App Terminated");
