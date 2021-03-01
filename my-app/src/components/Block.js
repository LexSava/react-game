import getColors from "../utils/getColors";

const Block = ({ num }) => {

    return (
        <div
            className={"block_style" + ' ' + "tile"}
            style={{
                background: getColors(num),
                color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
            }}
        >
            {num !== 0 ? num : ""}
        </div>
    );
};

export default Block;