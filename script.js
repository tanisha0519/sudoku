<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudoku Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f0f2f5;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #333;
            margin-bottom: 10px;
        }

        /* 9x9 Grid Layout */
        #board {
            display: grid;
            grid-template-columns: repeat(9, 45px);
            grid-template-rows: repeat(9, 45px);
            gap: 1px;
            background-color: #333;
            border: 3px solid #333;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        /* Individual cells styling */
        #board input {
            width: 45px;
            height: 45px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            border: none;
            outline: none;
            background-color: #fff;
            box-sizing: border-box;
        }

        /* Visual separation for 3x3 subgrids */
        #board input:nth-child(3n) {
            border-right: 2px solid #333;
        }
        #board input:nth-child(9n) {
            border-right: none;
        }
        #board input:nth-child(n+19):nth-child(-n+27),
        #board input:nth-child(n+46):nth-child(-n+54) {
            border-bottom: 2px solid #333;
        }

        /* Fixed numbers provided by the puzzle */
        .fixed {
            background-color: #e2e8f0 !important;
            color: #4a5568;
            cursor: not-allowed;
        }

        /* Controls wrapper */
        .controls {
            margin-top: 20px;
            display: flex;
            gap: 10px;
        }

        button {
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.2s;
        }

        .btn-check { background-color: #4caf50; color: white; }
        .btn-check:hover { background-color: #43a047; }

        .btn-solve { background-color: #ff9800; color: white; }
        .btn-solve:hover { background-color: #fb8c00; }

        .btn-reset { background-color: #2196f3; color: white; }
        .btn-reset:hover { background-color: #1e88e5; }

        /* Feedback text */
        #message {
            margin-top: 15px;
            font-size: 18px;
            font-weight: bold;
            min-height: 27px;
        }
    </style>
</head>
<body>

    <h1>Sudoku</h1>
    
    <!-- Game Board -->
    <div id="board"></div>

    <!-- Status Message -->
    <div id="message"></div>

    <!-- Interactive Buttons -->
    <div class="controls">
        <button class="btn-check" onclick="checkSolution()">Check</button>
        <button class="btn-solve" onclick="showSolution()">Reveal Solution</button>
        <button class="btn-reset" onclick="newGame()">New Game</button>
    </div>

    <!-- Inject your JS script below or link it via src -->
    <script>
        // Paste your JavaScript code here if running from a single file
    </script>
</body>
</html>
