// Create var
let PlayerX = "";
let PlayerO = "";
let CorrcetPlayerX = false;
let MovesGame = 0;
const WinGame = ["123", "456", "789", "159", "357", "369", "258", "147"];

// Function use to show the select user and show in screen
function StartGame(event, player) {
  if (CorrcetPlayerX == false && event.target.innerText == "") {
    event.target.innerText = "X";
    PlayerX += player.toString();
    MovesGame += 1;
    if (MovesGame >= 5){
      checkWinner();
    }
    CorrcetPlayerX = true;
  } else {{
      event.target.innerText = "O";
      PlayerO += player.toString();
      MovesGame += 1
      if(MovesGame >= 5){
        checkWinner()
      }
      CorrcetPlayerX = false;
    }
  }
}

function checkWinner() {
  for (let index = 0; index < WinGame.length; index++) {
    Winner = WinGame[index].split("");
    let ScoreToWin = 0;
    if (CorrcetPlayerX == false) {
      for (let Score = 0; Score < Winner.length; Score++) {
        if (PlayerX.includes(Winner[Score])){
            ScoreToWin += 1;
            if (ScoreToWin == 3) {
              alert("X is winner!")
              

        }
        }
      }
    
    }else{
        for (let Score = 0; Score < Winner.length; Score++) {
            if(PlayerO.includes(Winner[Score])){
                ScoreToWin += 1;
                if (ScoreToWin == 3) {
                  alert("O is winner!")
                }}
        }
    }
  }
}

function ResetBth(){
    document.location.reload(true)
}