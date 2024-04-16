import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "please guess a number",
        type: "number",
        name: "userguessednumber",
    }
]);
if (answer.userguessednumber === randomnumber) {
    console.log("congratulation ! you win the game");
}
else {
    console.log("please try again");
}
