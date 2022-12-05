#!/usr/bin/env node
// above line is essential for project to work. Known as SHEBANG, used for nodejs scrpipts installation.
const yargs = require("yargs");
const { exec } = require('node:child_process')
const command = exec("sleep 100")


const options = yargs
 .usage(`Usage: `)
 .usage(`   Myshell   `)
 .option("ls1", { alias: "ls1", describe: "ls1 works just like ls in bash shell",demandOption:true})
 .option("pres", { alias: "pwd", describe: "present working directory"})
 .option("chdr", { alias: "chdr", describe: "Changing the working directory"})
 .option("exit", { alias: "close", describe: "exit(automatically exits after 100 seconds)" })
 .argv;
 
 console.log(`Hello!! ${options.ls1}`)
 command.on('close', (code) => {
     console.log('process has exited')
 })