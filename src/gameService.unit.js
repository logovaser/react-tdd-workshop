const {gameStatus} = require('./gameService');

const generateBoards = (dim) => {
    let boards = [];
    for (let i = 0; i < dim; i++) {

        let board = [];

        for (let y = 0; y < dim; y++) {
            board.push([]);
            for (let x = 0; x < dim; x++) {
                board[y][x] = y === i ? 'X' : '';
            }
        }

        boards.push(board);
    }
    for (let i = 0; i < dim; i++) {

        let board = [];

        for (let y = 0; y < dim; y++) {
            board.push([]);
            for (let x = 0; x < dim; x++) {
                board[y][x] = x === i ? 'X' : '';
            }
        }

        boards.push(board);
    }

    let board = [];

    for (let y = 0; y < dim; y++) {
        board.push([]);
        for (let x = 0; x < dim; x++) {
            board[y][x] = x === y ? 'X' : '';
        }
    }

    boards.push(board);

    board = [];

    for (let y = 0; y < dim; y++) {
        board.push([]);
        for (let x = 0; x < dim; x++) {
            board[y][x] = dim - x -1 === y ? 'X' : '';
        }
    }

    boards.push(board);

    return boards;
};

test('X should win', () => {
    generateBoards(3).forEach(board => expect(gameStatus(board)).toBe('X'));
});
