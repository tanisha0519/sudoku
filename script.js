const puzzle = [
    {
[8,0,0,2,0,0,4,0,0],
[1,0,4,3,0,0,0,0,5],
[0,0,0,0,0,5,0,2,0],
[0,8,0,0,6,0,0,1,2],
[0,0,7,0,0,0,5,0,0],
[6,4,0,0,0,0,0,8,0],
[0,5,0,4,0,0,0,0,0],
[3,0,0,0,0,2,9,0,7],
[0,0,6,0,0,8,0,0,3]
],
solution = [
[8,3,5,2,7,1,4,9,6],
[1,2,4,3,6,9,8,7,5],
[7,6,9,8,4,5,3,2,1],
[5,8,3,7,9,4,6,1,2],
[2,9,7,1,8,6,5,3,4],
[6,4,1,5,2,3,7,8,9],
[9,5,2,4,3,7,1,6,8],
[3,1,8,6,5,2,9,4,7],
[4,7,6,9,1,8,2,5,3]
]
}
];
let currentPuzzle;
let currentSolution;
function createBoard(){
    const board = document.getElementById("board");
    board.innerHTML = "";
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let cell = document.createElement("input");
            cell.maxLength = 1;
            cell.id = r + "-" + c;
            cell.addEventListener("input", function () {
                this.value = this.value.replace(/[^1-9]/g, "");
            });
            if(currentPuzzle[r][c] != 0){
                cell.value = currentPuzzle[r][c];
                cell.disabled = true;
                cell.classList.add("fixed");
            }
            board.appendChild(cell);
        }
    }
}
function newGame(){
    let randomIndex = Math.floor(Math.random() * games.length);
    currentPuzzle = games[randomIndex].puzzle;
    currentSolution = games[randomIndex].solution;
    createBoard();
    document.getElementById("message").innerHTML = "";
}
function checkSolution(){
    let correct = true;
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let cell = document.getElementById(r + "-" + c);
            if(Number(cell.value) !== currentSolution[r][c]){
                correct = false;
            }
        }
    }
    document.getElementById("message").innerHTML =
        correct
        ? "😍 You solved it !!!!......"
        : "Oopss...you are a bit incorrect!!... 😶‍🌫️";
}
function showSolution(){
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            document.getElementById(r + "-" + c).value = currentSolution[r][c];
        }
    }
}
function newGame(){
    createBoard();
    document.getElementById("message").innerHTML="";
}
createBoard();
