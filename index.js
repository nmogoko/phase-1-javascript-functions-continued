// code your solution here
function saturdayFun (activity =`roller-skate`){
    return `This Saturday, I want to ${activity}!`
} 
saturdayFun(`bathe my dog`);

const mondayWork = function (toDo = `go to the office`) {
    return `This Monday, I will ${toDo}.`
    } ;
    mondayWork(`work from home`);


function wrapAdjective(accessory = "*"){
   function(adjective = "special"){
        return "You are ${accessory} ${adj}!"
    }
}
const encouragingPromptFunction = wrapAdjective("!!!");

