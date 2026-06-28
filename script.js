const puzzleDatabase = [
    {
        // Puzzle 1 (Your original puzzle)
        puzzle: [ 
            [8,0,0,2,0,0,4,0,0], [1,0,4,3,0,0,0,0,5], [0,0,0,0,0,5,0,2,0], 
            [0,8,0,0,6,0,0,1,2], [0,0,7,0,0,0,5,0,0], [6,4,0,0,0,0,0,8,0],
            [0,5,0,4,0,0,0,0,0], [3,0,0,0,0,2,9,0,7], [0,0,6,0,0,8,0,0,3] 
        ], 
        solution: [
            [8,3,5,2,7,1,4,9,6], [1,2,4,3,6,9,8,7,5], [7,6,9,8,4,5,3,2,1],
            [5,8,3,7,9,4,6,1,2], [2,9,7,1,8,6,5,3,4], [6,4,1,5,2,3,7,8,9],
            [9,5,2,4,3,7,1,6,8], [3,1,8,6,5,2,9,4,7], [4,7,6,9,1,8,2,5,3] 
        ]
    },
    {
        // Puzzle 2
        puzzle: [
            [0,0,0,2,6,0,7,0,1], [6,8,0,0,7,0,0,9,0], [1,9,0,0,0,4,5,0,0],
            [8,2,0,1,0,0,0,4,0], [0,0,4,6,0,2,9,0,0], [0,5,0,0,0,3,0,2,8],
            [0,0,9,3,0,0,0,7,4], [0,4,0,0,5,0,0,3,6], [7,0,3,0,1,8,0,0,0]
        ],
        solution: [
            [4,3,5,2,6,9,7,8,1], [6,8,2,5,7,1,4,9,3], [1,9,7,8,3,4,5,6,2],
            [8,2,6,1,9,5,3,4,7], [3,7,4,6,8,2,9,1,5], [9,5,1,7,4,3,6,2,8],
            [5,1,9,3,2,6,8,7,4], [2,4,8,9,5,7,1,3,6], [7,6,3,4,1,8,2,5,9]
        ]
    },
    {
        // Puzzle 3
        puzzle: [
            [0,0,0,6,0,2,0,0,0], [4,0,0,0,0,0,0,0,1], [0,8,5,0,0,0,9,2,0],
            [0,3,8,0,0,0,4,6,0], [0,0,0,1,0,8,0,0,0], [0,2,4,0,0,0,1,3,0],
            [0,5,1,0,0,0,7,4,0], [8,0,0,0,0,0,0,0,5], [0,0,0,9,0,5,0,0,0]
        ],
        solution: [
            [7,1,3,6,9,2,5,8,4], [4,9,2,5,8,3,6,7,1], [6,8,5,7,1,4,9,2,3],
            [1,3,8,2,5,9,4,6,7], [5,7,6,1,3,8,2,4,9], [9,2,4,4,7,6,1,3,8],
            [3,5,1,8,2,7,7,4,6], [8,4,9,3,6,1,2,7,5], [2,6,7,9,4,5,8,1,3]
        ]
    }
];
let currentPuzzle = [];
let currentSolution = [];
function selectRandomPuzzle() {
    const randomIndex = Math.floor(Math.random() * puzzleDatabase.length);
    currentPuzzle = puzzleDatabase[randomIndex].puzzle;
    currentSolution = puzzleDatabase[randomIndex].solution;
}
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
function checkSolution(){
    let correct = true;
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let cell = document.getElementById(r + "-" + c);
            if(Number(cell.value) != currentSolution[r][c]){
                correct = false;
            }
        }
    }
    if(correct){
        document.getElementById("message").innerHTML = " 😍 You solved it !!!!......";
    } else {
        document.getElementById("message").innerHTML = " Oopss...you are a bit incorrect!!... 😶‍🌫️ ";
    }
}
function showSolution(){
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let cell = document.getElementById(r + "-" + c);
            cell.value = currentSolution[r][c];
        }
    }
}
function newGame(){
    selectRandomPuzzle(); 
    createBoard();
    document.getElementById("message").innerHTML = "";
}
slectRandomPuzzle();
createBoard();
