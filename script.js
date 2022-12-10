let textOnly=document.querySelector("#sentence").value;
console.log(textOnly)
let initialSentence=textOnly
let words=textOnly.innerHTML||textOnly
words.toString;
const myArray=words.split(" ");




function sort(){
    myArray.sort
}


function countWords(str) {
    const arr = str.split(' ');
  
    return arr.filter(word => word !== '').length;
  }

  console.log(countWords(words))


function scrambler(){
//     for(let i=0;i<countWords(textOnly);i++){
//     if (randomiser()==3){
//         document.getElementById("test").innerHTML+=" " + myArray[1]
//     }
// else if(randomiser()==2){
//     document.getElementById("test").innerHTML+="" + myArray[2]
//     }
//     else if(randomiser()==1){
//         document.getElementById("test").innerHTML+=" " + myArray[0]
//         }
myArray.sort();
myArray.reverse();
document.getElementById("test").innerHTML+=myArray
}


function sentenceChecker(){
    let studentSentence=document.getElementById("answer")
    if(initialSentence==studentSentence){
        alert("Well done")
    }
    else{
        alert("Try again")
    }
}