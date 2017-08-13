
This basic node application is for demoing node js development. 
Can serve as a skeleton for a node application.
Steps to create this skeleton are outlined below.


Initial Setup:
-------------

- Installing node:
	Install nvm:	curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
	Install node:	nvm install 6.11.2

- Node-specific .gitignore:
	wget https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -O .gitignore

- Create .jshintrc and .jshintignore:
	http://jshint.com/docs/options/

- npm init to create your package.json skeleton

Set up your Dependencies:
------------------------

Dependencies are external modules that get added into your package.json. Running "npm install" in your
project's root folder installs all dependencies in the node_modules folder. Version and ugrade policy
can be specified in the package.json. Some dependencies we'll use are:

	- bunyan (https://www.npmjs.com/package/bunyan):
	
	A logging library that outputs JSON, which is great if you want to process your logs.
	The app's JSON output can also be piped to the Bunyan command line tool which prettifies the output.

	- jshint (http://jshint.com/about/): 

	A Javascript linting and static code analysis tool, used to spot errors and potential bugs including
	syntax errors, keep code clean, and enforcing a coding style. Also see, JSCS.

	- mocha (https://mochajs.org/):

	Mocha is a simple, fast, feature-rich testing lirary for Node.js. Allows you to create a test suite
	for your node application. It's great for unit and integration testing. Perfect if you want to practice
	TDD and BDD (Behaviour Driven Development).

To install a dependency and add it to your package.json as well use the following command:
	npm install -g <module>

NPM Scripts:
-----------

NPM can be used as a decent build tool for simple operations.

Perfect for:
- a start command to start the app and pipe the output to bunyan:
	"start": "npm run get-config && node . | bunyan -o short"

- a 'test-mocha' command to run the test suite:
	"test-mocha": "mocha --colors --reporter spec --check-leaks --globals testApp,resetDatabases | bunyan -o short"

- a 'test' command to chain the test suite with jshint:
	"test": "npm run test-mocha && jshint ."