import getColors from "../utils/getColors";
import style from "../style/style";

const Block = ({ num }) => {
    const { blockStyle } = style;
    return (
        <div
            style={{
                ...blockStyle,
                background: getColors(num),
                color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
            }}
        >
            {num !== 0 ? num : ""}
        </div>
    );
};
export default Block;