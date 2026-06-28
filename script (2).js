const puzzle = [
[5,3,0,0,7,0,0,0,0],
[6,0,0,1,9,5,0,0,0],
[0,9,8,0,0,0,0,6,0],
[8,0,0,0,6,0,0,0,3],
[4,0,0,8,0,3,0,0,1],
[7,0,0,0,2,0,0,0,6],
[0,6,0,0,0,0,2,8,0],
[0,0,0,4,1,9,0,0,5],
[0,0,0,0,8,0,0,7,9]
];

const solution = [
[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]
];

function createBoard(){

    const board=document.getElementById("board");
    board.innerHTML="";

    for(let r=0;r<9;r++){

        for(let c=0;c<9;c++){

            let cell=document.createElement("input");
            cell.maxLength=1;
            cell.id=r+"-"+c;

            if(puzzle[r][c]!=0){

                cell.value=puzzle[r][c];
                cell.disabled=true;
                cell.classList.add("fixed");
            }

            board.appendChild(cell);

        }
    }
}

function checkSolution(){

    let correct=true;

    for(let r=0;r<9;r++){

        for(let c=0;c<9;c++){

            let cell=document.getElementById(r+"-"+c);

            if(Number(cell.value)!=solution[r][c]){
                correct=false;
            }

        }

    }

    if(correct){
        document.getElementById("message").innerHTML="🎉 Congratulations! You solved it.";
    }else{
        document.getElementById("message").innerHTML="❌ Some answers are incorrect.";
    }

}

function showSolution(){

    for(let r=0;r<9;r++){

        for(let c=0;c<9;c++){

            let cell=document.getElementById(r+"-"+c);
            cell.value=solution[r][c];

        }

    }

}

function newGame(){
    createBoard();
    document.getElementById("message").innerHTML="";
}

createBoard();