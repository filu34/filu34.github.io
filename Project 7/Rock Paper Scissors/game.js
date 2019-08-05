// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")];

//Pierwsza funkcja.
function handSelection() {
    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "5px 5px 30px black";
    // getMatchedCSSRules.playerHand = this.dataset
};

// const handSelection = (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
// };

function aiChoice() {
    
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
};

function checkResult(player, ai) {
    if(player === ai) {
        console.log("Remis...")
        return "draw";
    }
    else if((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        console.log("Wygrałeś!");
        return "win";
    } 
    else { 
        console.log("Przegrałeś...") 
        return "loss";
    };
};

//Publikacja wyniku.

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

    if(result === "win") {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Jesteś zwycięzcą!";
        document.querySelector('[data-summary="who-win"]').style.color = "gold";
    }
    else if (result === "loss") {
        document.querySelector("p.losses span").textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Jesteś przegrywem!";
        document.querySelector('[data-summary="who-win"]').style.color = "silver";
    }
    else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Obaj jesteście przegrywem. Jak nikt nie przegrał to nikt nie wygrał.";
        document.querySelector('[data-summary="who-win"]').style.color = "brown";
    }
};

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
};

//Funkcja sterująca.
function startGame() {
    if(!game.playerHand) {
         return alert("Wybierz dłoń!!");
    }
    // console.log("Idę dalej.");

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
};

hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);