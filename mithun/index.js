const {question}  =require('readline-sync')
//var num1 = parseInt(question("Enter First Number"))
//var num2 = parseInt(question("Enter Second Number"))
//let oper = question("Enter  Operato + , - * , %    ")
//console.log(oper)
//console.log(eval(`${num1} ${oper} ${num2}`));
//console.log(global)
var natives = process.binding('natives');
for (var key in natives) {if (key.indexOf('_') !== 0) {console.log(key);}}

