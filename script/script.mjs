let attemps = 5;
let messages = []
let winnerNum = 2;
attempTimes(attemps)
// // Create attemps times and store it into messages array
function attempTimes(num) {
    for (let i = num; i > 0; i--) {
        messages.push(`You have ${i} more attemps`)
    }
}
console.log(messages)

// getResponses(attemps)

response = window.prompt(`Welcome! Let's play a bit.\n Try to guess the number!\n Input any number from 1 to 10`);

checkResponse(response)

function checkResponse(input){
    if (response == winnerNum) {
    return window.alert("Congratulations!! You got the right answer")
    }
    else {
        for (let text of messages) {
            response = window.prompt(text);
            console.log(response)
        }

        return window.alert("Sorry, you couldn't make it this time!")

    }

}