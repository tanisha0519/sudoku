// A collection of different Sudoku puzzles and solutions
const puzzleDatabase = [
    {
        puzzle: [, [1,0,4,3,0,0,0,0,5], [0,0,0,0,0,5,0,2,0],
, [0,0,7,0,0,0,5,0,0], [6,4,0,0,0,0,0,8,0],
, [3,0,0,0,0,2,9,0,7], [0,0,6,0,0,8,0,0,3]
        ],
        solution: [, [1,2,4,3,6,9,8,7,5], [7,6,9,8,4,5,3,2,1],
, [2,9,7,1,8,6,5,3,4], [6,4,1,5,2,3,7,8,9],
, [3,1,8,6,5,2,9,4,7], [4,7,6,9,1,8,2,5,3]
        ]
    },
    {
        puzzle: [, [6,8,0,0,7,0,0,9,0], [1,9,0,0,0,4,5,0,0],
, [0,0,4,6,0,2,9,0,0], [0,5,0,0,0,3,0,2,8],
, [0,4,0,0,5,0,0,3,6], [7,0,3,0,1,8,0,0,0]
        ],
        solution: [, [6,8,2,5,7,1,4,9,3], [1,9,7,8,3,4,5,6,2],
, [3,7,4,6,8,2,9,1,5], [9,5,1,7,4,3,6,2,8],
, [2,4,8,9,5,7,1,3,6], [7,6,3,4,1,8,2,5,9]
        ]
    },
    {
        puzzle: [, [5,8,0,0,0,9,7,0,0], [0,0,0,0,4,0,0,0,0],
, [6,0,0,0,0,0,0,0,4], [0,0,8,0,0,0,0,1,3],
, [0,0,9,8,0,0,0,3,6], [0,0,0,3,0,6,0,9,0]
        ],
        solution: [, [5,8,4,2,1,9,7,6,3], [9,6,3,5,4,7,1,8,2],
, [6,9,1,7,5,3,8,2,4], [4,5,8,9,6,2,3,1,7],
, [7,4,9,8,1,5,2,3,6], [2,1,5,3,7,6,4,9,8]
        ]
    }
];

// Global tracking variables
let currentPuzzle = [];
let currentSolution = [];

function selectRandomPuzzle() {
    // Pick a random index from our puzzle database
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
            
            // Check against the newly selected random puzzle
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
    selectRandomPuzzle(); // Choose a new layout first
    createBoard();        // Build the physical board
    document.getElementById("message").innerHTML = "";
}

// Initialize the very first game load
newGame();
