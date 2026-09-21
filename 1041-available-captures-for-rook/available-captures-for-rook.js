/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    /* let rookRow, rookCol;
    let result = 0;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (board[row][col] === 'R') {
                rookRow = row;
                rookCol = col;
            }
        }
    }
    for (let i = rookCol - 1; i >= 0; i--) {
        if (board[rookRow][i] === '.') {
            continue;
        } else if (board[rookRow][i] === 'p') {
            result++;
            break;
        } else if (board[rookRow][i] === 'B') {
            break;
        }
    }

    for (let i = rookCol + 1; i < 8; i++) {
        if (board[rookRow][i] === '.') {
            continue;
        } else if (board[rookRow][i] === 'p') {
            result++;
            break;
        } else if (board[rookRow][i] === 'B') {
            break;
        }
    }

    for (let i = rookRow - 1; i >= 0; i--) {
        if (board[i][rookCol] === '.') {
            continue;
        } else if (board[i][rookCol] === 'p') {
            result++;
            break;
        } else if (board[i][rookCol] === 'B') {
            break;
        }
    }

    for (let i = rookRow + 1; i < 8; i++) {
        if (board[i][rookCol] === '.') {
            continue;
        } else if (board[i][rookCol] === 'p') {
            result++;
            break;
        } else if (board[i][rookCol]=== 'B') {
            break;
        }
    }
    return result; */

    let rookRow, rookCol; let result = 0;
    for (let row = 0; row < 8; row++) { for (let col = 0; col < 8; col++) { if (board[row][col] === 'R') { rookRow = row; rookCol = col; } } }
    
    function checkSquare(square) { if (square === '.') { return 'continue'; } else if (square === 'p') { result++; return 'stop'; } else if (square === 'B') { return 'stop'; } }
    
    for (let i = rookCol - 1; i >= 0; i--) { let action = checkSquare(board[rookRow][i]); if (action === 'stop') { break; } }
    for (let i = rookCol + 1; i < 8; i++) { let action = checkSquare(board[rookRow][i]); if (action === 'stop') { break; } }
    for (let i = rookRow - 1; i >= 0; i--) { let action = checkSquare(board[i][rookCol]); if (action === 'stop') { break; } }
    for (let i = rookRow + 1; i < 8; i++) { let action = checkSquare(board[i][rookCol]); if (action === 'stop') { break; } } return result; 
    };
