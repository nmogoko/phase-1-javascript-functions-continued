// code your solution here
function saturdayFun (activity = 'roller-skate') {
     return `This Saturday, I want to ${activity}!`;
} 
saturdayFun();
saturdayFun(`bathe my dog`);

function mondayWork (toDo = "go to the office") {
   return `This Monday, I will ${toDo}.`;
}
mondayWork();
mondayWork("take out trash");

function wrapAdjective(accessory = "*"){
   return function(praise = "special"){
        return `You are ${accessory}${praise}${accessory}!`;
    }
}
const encouragingPromptFunction = wrapAdjective()("loyal");
console.log(encouragingPromptFunction);
