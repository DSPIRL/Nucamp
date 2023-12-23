function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert(`You rolled a ${roll}.`);
        if (roll === 1) {
            alert("Game over, no more rolls!");
            break;
        }
        if (roll < 5) {
            continue;
        }
        if (goldCoins > 0 && roll === 4) {
            let losings = 1;
            alert(`Oh no! You lost ${losings} gold coin! You have a total of ${goldCoins - losings} coins.`);
            goldCoins -= losings;
        }
        alert(`Congratulations, you win ${roll} gold coins! You have a total of ${goldCoins + roll} coins.`);
        goldCoins += roll;
    }
    alert(`You have won a total of ${goldCoins} gold coins!`);
}