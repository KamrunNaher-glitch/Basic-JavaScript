let myScore = 85; // Example my score
let friendScore = 75; // Example friend's score

// Decision based on my score
if (myScore > 80) {
    console.log("You scored more than 80. Checking friend's score...");

    if (friendScore > 80) {
        console.log("Friend scored more than 80. Go for a lunch!");
    } else if (friendScore >= 60) {
        console.log("Friend scored below 80 but greater than or equal to 60. Good luck next time!");
    } else if (friendScore >= 40) {
        console.log("Friend scored below 60 but greater than or equal to 40. Keep friend's message unseen.");
    } else {
        console.log("Friend scored less than 40. Block your friend.");
    }

} else {
    console.log("You scored less than 80. Go home, sleep, and act sad.");
}
