function computerPlay() {
    const playOptions = ['rock', 'paper', 'scissors'];
    const playIndex = Math.floor(Math.random() * 3);
    return playOptions[playIndex];
}

function playRound(playerSelection, computerSelection) {
    let resultMessage;
    let resultValue;
    if(!isNaN(playerSelection)) {
        throw new Error('Numbers not accepted as input');
    }
    switch(playerSelection.toLowerCase()) {
        case 'rock':
            if(computerSelection === 'rock') {
                resultMessage = `WOW! It was a tie`
                resultValue = 'tie';
            }
            if(computerSelection === 'paper') {
                resultMessage = `You lose\nI told you I'm good at this.\n${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
                resultValue = 'lose';
            }
            if(computerSelection === 'scissors') {
                resultMessage = `You win\nI can't believe this\nI must try harder\n${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
                resultValue = 'win';
            }
            break;
        case 'paper':
            if(computerSelection === 'rock') {
                resultMessage = `You win\nI can't believe this\nI must try harder\n${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
                resultValue = 'win';
            }
            if(computerSelection === 'paper') {
                resultMessage = `WOW! It was a tie`
                resultValue = 'tie';
            }
            if(computerSelection === 'scissors') {
                resultMessage = `You lose\nI told you I'm good at this.\n${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
                resultValue = 'lose';
            }
            break;
        case 'scissors':
            if(computerSelection === 'rock') {
                resultMessage = `You lose\nI told you I'm good at this.\n${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
                resultValue = 'lose';
            }
            if(computerSelection === 'paper') {
                resultMessage = `You win\nI can't believe this\nI must try harder\n${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
                resultValue = 'win';
            }
            if(computerSelection === 'scissors') {
                resultMessage = `WOW! It was a tie`
                resultValue = 'tie';
            }
            break;
        default:
            throw new Error(`
                "${playerSelection}" is not a valid move.
                Only rock, paper and scissors are accepted.
            `);
    }
    return {
        resultMessage,
        resultValue,
    };
}

function game() {
    const score = {
        player: 0,
        computer: 0,
    }
    for(let round=1; round<6; round++) {
        const playerSelection = prompt(`
            This is round number ${round}
            
            The score is:
            🦸🏽‍♂️ You: ${score.player}
            👹 Monster: ${score.computer}

            Choose your next move:
        `);
        const computerSelection = computerPlay();
        try {
            const {
                resultMessage,
                resultValue
            } = playRound(playerSelection, computerSelection);
            alert(`
                👹 My chosen move is ${computerSelection}
            `);
            switch(resultValue) {
                case 'win':
                    alert(resultMessage);
                    score.player++;
                    break;
                case 'lose':
                    alert(resultMessage);
                    score.computer++;
                    break;
                case 'tie':
                    alert(resultMessage);
                    break;
                default:
                    break
            }
        } catch(error) {
            alert(`
                Ups, something went wrong.
                Let's play this round again, but be aware of this:
                ${error}
            `);
            round--;
        }
    }
    if(score.player > score.computer) {
        alert(`
            You beat me. I can't believe it.
            Well, you are really good at this.
            But don't think this will happen again.

            The score was:
            🦸🏽‍♂️ You: ${score.player}
            👹 Monster: ${score.computer}
        `)
        return 'win';
    } else if(score.player < score.computer) {
        alert(`
            HAHAHA I beat you.
            Quite easy to be honest.
            I told you since the beginning this would happen.

            The score was:
            🦸🏽‍♂️ You: ${score.player}
            👹 Monster: ${score.computer}
        `)
        return 'lose';
    } else {
        alert(`
            It's a tie!
            You're a worthy opponent.
            You can try again next time.

            The score was:
            🦸🏽‍♂️ You: ${score.player}
            👹 Monster: ${score.computer}
        `)
        return 'tie';
    }
}

function initGame() {
    let gameOver = false;
    while(!gameOver) {
        alert(`
            🏰 Welcome to the kingdom of rock, paper, scissors.

            👹 Here lives a big old monster that torments the citizens.

            To save them you have to beat the monster at a
            rock, paper, scissors game. 🪨 🗒️ ✂️

            🦸🏽‍♂️ Will you be their hero?
        `);
        alert(`
            📜 The rules are simple.
            You will play 5 rounds against the monster.
            Whoever wins the most wins.

            🫵🏼 From here on you will be alone.
            Good luck... and try not to die out there.
        `);
        const startGame = prompt(`
            👹 Hmm? Who is there?
            Do you dare to interrupt my sleep?

            What? So, you want to fight me?
            I have played rock, paper, scissors all my life.
            There's no way you can beat me.
            But I recognize that you are brave.

            Ok, then. Say yes if you want to fight.
            C'mon. Let's end this quick.
        `);
        if(startGame.trim().toLowerCase() === 'yes') {
            const playerResult = game();
            switch(playerResult) {
                case 'win':
                    alert(`
                        🧑🏽‍🦰👨🏼‍🦱👩🏻👱🏽‍♀️👴🏼
                        You are the one.
                        We finally find you.
                        Our hero.
                        You defeat that ugly monster.
                        You saved this kingdom. Thank you.
                        You can now go in peace.
                    `);
                    break;
                case 'lose':
                    alert(`
                        💀💀💀💀💀
                        You were defeated by the monster.
                        This kingdom will remain in shadows
                        under its terror.
                        Maybe next time you can do better.
                    `);
                    break;
                case 'tie':
                    alert(`
                        🤕🤕🤕🤕🤕
                        It was a tough battle.
                        This time no one was victorious.
                        But it seems like you have what it takes.
                        You can be the one to save the kingdom.
                    `);
                    break;
                default:
                    break
            }
            const playAgain = prompt(`
                Do you want to play again?
                Say yes if you want to start the game again.
            `)
            if(playAgain.trim().toLowerCase() !== 'yes') {
                gameOver = true;
            }
        } else {
            alert(`
                What's going on?
                Are you afraid of losing?
                Don't worry I'll wait for you right here.

                Remember to say yes when your ready.
            `);
        }
    }
}

initGame();