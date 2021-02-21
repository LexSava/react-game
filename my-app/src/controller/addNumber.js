
import checkIfGameOver from '../App';

const addNumber = (newGrid) => {
    let added = false;
    let gridFull = false;
    let attempts = 0;
    while (!added) {
        if (gridFull) {
            break;
        }

        let rand1 = Math.floor(Math.random() * 4);
        let rand2 = Math.floor(Math.random() * 4);
        attempts++;
        if (newGrid[rand1][rand2] === 0) {
            newGrid[rand1][rand2] = 2;
            added = true;
        }
        if (attempts > 50) {
            gridFull = true;
            let gameOverr = checkIfGameOver();
            if (gameOverr) {
                alert("game over");
            }
        }
    }
};
export default addNumber;