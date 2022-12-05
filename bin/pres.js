#!/usr/bin/env node



const dir = JSON.stringify(process.cwd());
const greeting=`You are here : ${dir}`;

// console.log("\n" + boxen(chalk.green("\n" + greeting + "\n"), {padding: 1, borderColor: 'green', dimBorder: true}) + "\n")
console.log(greeting)
