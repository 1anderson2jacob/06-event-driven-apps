'use strict';

const fs = require('fs');
const util = require('util');
const events = require('./events.js');
const logger = require('./logger.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

let alterFile = (altFile) =>
  readFile(altFile)
    .then((buffer) => Buffer.from(buffer.toString().trim().toUpperCase()))
    .then((buffer) => writeFile(altFile,buffer))
    .then(() => {events.emit('file-save', altFile); return true;})
    .catch((error) => events.emit('file-error', error));


let file = process.argv.slice(2).shift();
if (file){
  alterFile(file);
}

module.exports = alterFile;
