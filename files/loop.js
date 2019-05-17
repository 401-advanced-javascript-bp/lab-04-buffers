'use strict';

//Confirm which endian you are
const os = require('os');
console.log(`This is the require os function ${os.endianness()}`);
//this is Little Endian. It reads from right to left.

const arrNames = ['John', 'Sansa', 'Aria'];
arrNames.forEach(function(name){
    let buffer = Buffer.alloc(name.length, name, 'utf8');
})

console.log('a'.charCodeAt(0)); // will return 97
// 97 is the ascii value/key for the letter 'a'
//a byte can hold one ascii character or value

// let x = 12;
// console.log(`This is the padStart method: ${x.toString(2).padStart(4,0)}`);

//create a buffer to play with
//the alloc method is used instead of the .from method
// the first parameter is the length of the desired buffer
//the second parameter is the string to be buffered
//since the second parameter is a string, an encoding method is needed. The default is used.
let buffer = Buffer.alloc(arrNames[0].length, arrNames[0], 'utf8');

//Those numbers are Hex Codes for each char
console.log(`This is the first time buffer is defined: ${buffer}`);

//Built-In stringify Method
console.log(`This is the built in stringify method: ${buffer.toString()}`);

//But we can easily replicate that ourselves. It's just an array
let stringifyBuffer = buffer => {
    let str = '';
    for (let char of buffer) {
        str += String.fromCharCode(char);
    }
    return str;
};

console.log(`This is the stringifyBuffer function: ${stringifyBuffer(buffer)}`);

//Replace any character by giving a hex code
// buffer[0] = 0x41;
// console.log(`replace any character by giving a hex code ${buffer.toString()}`);

//Or an ascii code (node is smart!)
buffer[0] = 74;
console.log(buffer.toString());
console.log(`This is the length of the variable buffer ${buffer.length}`);

//How can we read into it, by a given number of bytes?
//This will read 2 bytes (8x2=16), and skip none

console.log(`This will read 2 bytes and skip none of 'John', reading from right to left, only reading the last two characters. It represents the decimal value: ${buffer.readInt16LE(0)}`);
console.log(`This represents the hexidecimal value of the last two letters in 'John', read from right to left or 'nh': ${(`6E68`.toString())}`); //6E68 is the hexidecimal value for the last two letters in 'John' read from right to left or 'nh'

//Put in the big number (28490) to the calculator.
//it should return 0x6f4a, which should match the hex codes of first 2 bytes in the buffer, backwards (LE)

//What will happen here?
console.log(`This reads decimal value ${buffer.readInt16LE(1)}`);
console.log(buffer.readInt16LE(2));
console.log(buffer.readInt32LE(0));
// console.log(buffer.readInt32LE(1));
// console.log(buffer.readInt32LE(2));