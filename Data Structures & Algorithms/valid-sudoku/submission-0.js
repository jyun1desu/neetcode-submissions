class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    getSquareIndex(rowIndex, columnIndex) {
        return Math.floor(rowIndex / 3) * 3 + Math.floor(columnIndex / 3)
    }

    isValidSudoku(board) {
        const rows = Array(9).fill(0).map(()=>[]);
        const columns = Array(9).fill(0).map(()=>[]);
        const squares = Array(9).fill(0).map(()=>[]);

        for(let i = 0; i < board.length; i++) {
            const cur = board[i];
            for(let j = 0; j < cur.length; j++) {
                const num = cur[j];

                if(num === ".") {
                    continue;
                }

                const rowIndex = i;
                const columnIndex = j;
                const squareIndex = this.getSquareIndex(i, j)

                if(rows[rowIndex].includes(num) || columns[columnIndex].includes(num) || squares[squareIndex].includes(num)) {
                    return false;
                } else {
                    rows[rowIndex].push(num);
                    columns[columnIndex].push(num);
                    squares[squareIndex].push(num);
                }
            }
        };

        return true;
    }
}
