var readlinesync= require('readline-sync');
var score =0;
var user=readlinesync.question("What is your name ? ");
console.log("Hey",user,"welcome to DO YOU KNOW SUPERHEROES?");
console.log("Remember to enter all answers in lowercase, let's begin");
console.log(" ");

function quiz(question,answer){
  var userAnswer=readlinesync.question(question);
  if(userAnswer===answer){
    console.log("You're right!");
    score=score+1;
  }
  else{
    console.log("Incorrect");
  }
  console.log("Score is",score);
  console.log(" ");
}

var questions=[
  {
    question:"Is superman smarter than batman ? ",
    answer:"no",
  },
  {
    question:"What is batman's city of origin? ",
    answer:"gotham",
  },
  {
    question:"What colour is the flash's outfit? ",
    answer:"red",
  },
  {
    question:"Ben affleck played which superhero in the DC cinematic universe? ",
    answer:"batman"
  }
]

for(var i=0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer);
}
console.log("Great! Your final score is",score);
