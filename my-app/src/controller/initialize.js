import addNumber from "./addNumber";
import cloneDeep from "lodash.clonedeep";


const initialize = (data, setData) => {
    let newGrid = cloneDeep(data);
    addNumber(newGrid);
    addNumber(newGrid);
    { setData(newGrid) }
};

export default initialize;