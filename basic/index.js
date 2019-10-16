console.log("Apni to jaise taise kat jayegi aapka kya hoga.");
// global functions and variable

console.log(__dirname);
console.log(__filename);
// console.log(global)
console.log(global.process.argv)
console.log("process.env.xyz", process.env.xyz)
process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});
//
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');
var myworld = require("./kadhihasveliyakaro");
console.log(myworld.a)
console.log(x);
var os = require("os");
console.log(os.cpus());
var validators = require("validators");
console.log(validators.validateEmail("is@m.com"));

