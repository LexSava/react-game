import addNumber from "./addNumber";
import cloneDeep from "lodash.clonedeep";

const initialize = (data, setData, setNewGame) => {
    let newGrid = cloneDeep(data);
    addNumber(newGrid);
    addNumber(newGrid);
    { setData(newGrid) }
    { setNewGame(false); }
};

export default initialize;