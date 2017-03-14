const ticTacToe = {
    init: () => {
        ticTacToe.attachEvents();
        // ticTacToe.restartBoard();
    },

    attachEvents: () => {
        const gameBoardSections = document.querySelectorAll('.game-board_elements');
        const gameSectionsArray = [].slice.call(gameBoardSections);
        gameSectionsArray.forEach((node) => {
            node.addEventListener('click', (event) => ticTacToe.setGamePiece(node, gameBoardSections), false);
        });
        const resetButton = document.getElementById('restart');
        resetButton.addEventListener('click', (event) => ticTacToe.restartBoard(), false);
    },

    setGamePiece: (element, gameBoardSections) => {
        element.querySelector('.game-square').setAttribute('disabled', 'true');
        return ticTacToe.setTurn(element, gameBoardSections);
    },

    setTurn: (element, gameBoardSections) => {
        const currTurn = element.classList.contains('x') ? "o" : "x";
        const prevTurn = currTurn === 'x' ? 'o' : 'x';
        document.querySelector(`.player-bubble_${currTurn}`).classList.add('active');
        document.querySelector(`.player-bubble_${prevTurn}`).classList.remove('active');
        const notDisabledElems = [];
        [].slice.call(gameBoardSections).forEach((elem) => {
            if(elem.querySelector('.game-square:not([disabled])')){
                notDisabledElems.push(elem);
            }
        });
        notDisabledElems.forEach((elem) => {
            elem.classList.remove(prevTurn);
            elem.classList.add(currTurn);
        });
        notDisabledElems.length <= 0 ? ticTacToe.gameOver() : true;
    },

    gameOver: () => {
        const endScreen = document.createElement('h2');
        endScreen.classList.add('end-screen');
        endScreen.textContent = "GAME OVER";
        document.querySelector('.main').appendChild(endScreen);
    },

    restartBoard: () => {
        let gameOver = {};
        gameOver = document.querySelector('.end-screen');
        gameOver !== null ? document.querySelector('.main').removeChild(gameOver) : 'null';
        [].slice.apply(document.querySelectorAll('.game-board_elements .game-square')).forEach((elem) => elem.removeAttribute('disabled'));
        document.querySelector(`.player-bubble_x`).classList.add('active');
        document.querySelector(`.player-bubble_o`).classList.remove('active');
    }

};
