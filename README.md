# CLI
A Bash type shell built using Nodejs. I gave some custom names to commands which can be viewed in the shell.js file. Run shell or run node shell.js .(Why did I just wrote "run shell",you wonder? Because I used scripts. Keep reading to know more)

#Usage Instructions:

Run npm install to install all the dependencies and scripts. I've enabled scripts so these shell commands can be run from anywhere in the file system.
Scripts: These are used to automate repetitive tasks. A script might include a set of commands, or a single command, or it might contain the hallmarks of imperative programming like loops, functions, conditional constructs, etc.

*Entry Point: ./bin/shell.js

Run shell.js to get the instructions about using the shell

Enter the name of the command you wish to execute. For eg: ls1.

Note: to change current working directory: also enter the location of new directory alongwith the command. for eg: pres ../

An important Note: Since I've used scripts so one can directly enter the commands name like ls1 rather than node ls1.js/ , though both methods would work totally fine.

Sidenote: I could've also used chalk and boxen type tools to enhance the look. But such tools might distort the view on some shells or some screens so I abstained from them.

References used: 

1.https://medium.com/swlh/a-bash-script-with-node-js-1de85bf8cb5e

2.https://nodejs.org/api/child_process.html#child-process

3.https://yargs.js.org/docs/

4.https://nodejs.org/api/cli.html#command-line-api
