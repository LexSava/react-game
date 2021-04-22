const addNumber = (newGrid) => {
    let added = false;
    while (!added) {
        let rand1 = Math.floor(Math.random() * 4);
        let rand2 = Math.floor(Math.random() * 4);
        if (newGrid[rand1][rand2] === 0) {
            newGrid[rand1][rand2] = 2;
            added = true;
        }
    }
};
export default addNumber;