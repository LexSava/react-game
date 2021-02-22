import style from "../style/style";
import Score from "./Score";

const Head = ({ reset, score, best }) => {
    return (
        <div style={style.head}>
            <div
                style={style.logo}
            >
                2048
                {/* {props.score} */}
            </div>
            <div> <Score score={score} best={best} />
                <div
                    style={style.newGameButtonBlock}
                >
                    <div onClick={reset} style={style.newGameButton}>
                        NEW GAME
          </div>
                </div>
            </div>
        </div>
    );
};
export default Head;







