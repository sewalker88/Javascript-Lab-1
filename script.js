"use strict";

const fullName = "shawna walker";
let age = 0;
const birthDay ="May 15";
let detroitGC = true;
let lifeEvents= ["I was born in Detroit", "I was married Aug 31,2002","I have a masters Degree", "I have been elected for 12yrs"];

if (detroitGC){
    console.log (`my name is ${fullName} and I'm ${age} I am a student at Grand Circus Detroit, and my birthday is ${birthDay}`);
}
else {
    console.log( ` My name is ${fullName} and I'am a student at Grand Circus in Grand Rapids. I am currently ${age} years old and my birthday is on ${birthDay}`);
}
//this is where I start to have trouble.

for (i=0;i<lifeEvents.length;i++){
    console.log(lifeEvents[i]);
}
let counter=0;
while (true){
let randomNumber=Math.floor(Math.random()*10+1);
console.log(randomNumber);
if(randomNumber!==5){
    counter++;
    console.log(`${randomNumber}!==5`);
} else{
    counter++;
    console.log( `5===5, It took ${counter} iterations to randomly generate the number 5`
    );
    break;
}
}
//I have no clue
let hours=20;
let wage=10;
let totalPayCheck=0;
if( hours <=40) {
    totalPayCheck=hours*wage;{
        console.log(hours ++)
}
}

