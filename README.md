# Greetings Padawan!

Welcome to Node.js. This is a basic application meant for demo-ing node development, with each commit adding bite-sized functionality, to the benefit of beginners.
With each commit, the README will be updated to cover whatever was added or modified.

Steps to create this skeleton are outlined below.


## Initial Setup

#### Install Node.js using nvm:
[NVM](https://github.com/creationix/nvm/blob/master/README.md) is a tool you'll need sooner or later as a Node.js developer. It allows you to seamlessly install multiple Node.js versions and quickly switch between them with minimal impact to your dev environment.

- Install nvm:
```
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```
For windows, try [nvm-windows](https://github.com/coreybutler/nvm-windows).
- Listing available node versions:
```
    nvm ls-remote
```
- Install a Node version:
```
    nvm install node (installs latest version)
    or
    nvm install <version>
```
An alias for a version can also be used like so:
```
    nvm install lts/boron (installs v6.11.2)
```
- List installed versions:
```
    nvm ls
```
- Switch to an installed version:
```
    nvm use <version/alias>
```

#### Node-specific .gitignore:
	wget https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -O .gitignore

#### Create .jshintrc and .jshintignore:
Jshint is a static analysis tool to detect errors, typos, and language gotchas in JavaScript code and to enforce your team's coding conventions.
The jshint config files from this project will suffice for most projects. For more information on available options, check [here](http://jshint.com/docs/options/).

#### Create your package.json
The package.json file is used by the NPM tool. While it's not required by the Node.js application itself, it is highly recommended to create one since it lets you document your application dependencies (external packages) and specifythe required versions for each of them. Coupled with the "npm install" command, it makes your build easily reproducible by other developers.
Another notable feature is the ability to create simple commands, or scripts, which allow you to automate simple tasks related to your application.

Generate a skeleton package.json:
```
    npm init
```

##### Project Dependencies:

Dependencies are external Node.js packages that your application relies on. Running "npm install" in your project's root folder installs all dependencies in the node_modules folder. Version and ugrade policy can be specified in the package.json. Some dependencies we'll use:
- [bunyan](https://www.npmjs.com/package/bunyan): A logging library that outputs JSON, which is great if you want to process your logs. The app's JSON output can also be piped to the Bunyan command line tool which prettifies the output.
- [jshint](http://jshint.com/about/): A Javascript linting and static code analysis tool, as explained above. Also see, JSCS.
- [mocha](https://mochajs.org/): Mocha is a simple, fast, feature-rich testing lirary for Node.js. Great for unit and integration testing. Perfect if you want to practice TDD and BDD (Behaviour Driven Development).

To install a dependency:
```
	npm install <package_name>
```
Use the _-g_ flag with the install command to install the package globally instead of installing in your project's node_modules folder.
Use the _--save_ flag to add the dependency to the application's package.json.

##### NPM Scripts:
Think of NPM scripts as a way to declare simple shell commands mapped to an alias. These scripts can then be called with the "_npm run_" command
It is possible to use NPM scripts as a decent build tool for simple operations.
Perfect for:
- a start command to start the app and pipe the output to bunyan:
	"start": "node . | bunyan -o short"
- a 'test-mocha' command to run the test suite:
	"test-mocha": "mocha --colors --reporter spec --check-leaks | bunyan -o short"
- a 'test' command to chain the test suite with jshint:
	"test": "npm run test-mocha && jshint ."