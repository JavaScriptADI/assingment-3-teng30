let age=prompt("enter age here:");
let realAge=parseInt(age);

if (realAge >= 0 && realAge < 12){
console.log(`Enter your age: ${realAge} you are classified as: Child`)    
} else if (realAge >= 12 && realAge < 18){
console.log(`Enter your age: ${realAge} you are classified as: Teenager`);    
} else if (realAge >= 18 && realAge < 65){
console.log(`Enter your age: ${realAge} you are classified as: Adult`);    
} else if (realAge >= 65){
console.log(`Enter your age: ${realAge} you are classified as: Senior`)    
} else {
console.log("this age does not exist")    
}

