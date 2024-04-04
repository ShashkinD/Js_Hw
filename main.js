// First part: c,d (node .\main.js) 
console.log('Hello World');

//Second part
console.log('       *');
console.log('      ***');
console.log('     *****');
console.log('    *******');
console.log('   *********');
console.log('  ***********');
console.log(' *************');
console.log('***************');


let i = 0,
  j = 0;
// Strings qty
let max = 8;
let space = "",
  star = "";

while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "*";
  console.log(space + star);
  i++;
}

//Third part
let a = 10;
let b = 100;
let temp = 0
temp = a
a = b
b = temp
console.log(a)
console.log(b)