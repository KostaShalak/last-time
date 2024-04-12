// start Game
startGame(10, 10, 10);

function startGame(width, heigth, bombs_score) {
    // search and draw structure game

    const BODY = document.querySelector('.body');
    BODY.innerHTML = `
        <div class="container">
            <h1>Minesweeper</h1>
            <div class="area"></div>
        </div>
    `;

    // render game area

    const cellsScore = width * heigth;

    const AREA = document.querySelector('.area');
    AREA.innerHTML = `<button class="button"></button>`.repeat(cellsScore);

    // make array all buttons
    const cellsArr = [...AREA.children];
    

    // make random array index bombs 
    const bombsIndex = [...Array(cellsScore).keys()]
        .sort(() => Math.random() - 0.5)
        .slice(0, bombs_score)  
    ;


    AREA.addEventListener('click',(e) => {
        if( e.target.tagName !== 'BUTTON') {
            return;
        }

        // search position Buttons
        const index = cellsArr.indexOf(e.target);
        const row = index % width;
        const column = Math.floor(index / width);

        // Open button (mine or not)
        e.target.disabled = true;

        if(bombTrue(row, column)) {
            e.target.innerHTML = 'X';
            alert('You lose!!!');
            location.reload();
            return;        
        }

        const score = getMineScore(row, column);

        if(score !== 0) {
            e.target.innerHTML = score;
            return;
        } else {
            e.target.innerHTML = ' ';
            return; 
        }
    });


    // search around mine score
    function getMineScore(row, col) {
        let score = 0;

        for(let i = -1; i < 2; i++) {
            for(let k = -1; k < 2; k++) {
                if(bombTrue(row + k,col + i)) {
                    score++;
                }
            }
        }
        return score;
    }


    // check bomb on true
    function bombTrue(row, col) {
        const indexBomb = row * width + col;

        return bombsIndex.includes(indexBomb);
    }
};   