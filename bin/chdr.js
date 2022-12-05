#!/usr/bin/env node

const process = require('process');

// Printing present working Directory
console.log("Present working directory: " + process.cwd());

try {
   // Updating with the New directory
   let a=process.argv[2];
   process.chdir(a);
   console.log("Updated working directory is: " + process.cwd());
} catch (err) {
      // Printing error if any occurs
      console.error("error occured while " + "changing directory: " + err);
}