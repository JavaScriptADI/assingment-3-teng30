let sentence=prompt("enter text here");
let sentLength=sentence.length;
let words=sentence.split();
let totalwords=words.length;
let containsJavaScript=sentence.includes("javaScript");

console.log(`text length: ${sentLength}, total words: ${totalwords}, contains the word javascript: ${containsJavaScript}`)