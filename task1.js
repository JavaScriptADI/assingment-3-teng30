const number=Math.floor(10 * Math.random() + 1);
const mynumber=Number(prompt("Guess a number between 1 and 10: "));

if (mynumber < number) {
console.log(`${mynumber} too low! try again`);
} else if (mynumber > number) { 
console.log(`${mynumber} too high! try again.`);    
} else {
console.log(`${mynumber} is correct`)   
}

