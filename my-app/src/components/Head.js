import style from "../style/style";

const Head = (props) => {
    return (
        <div style={style.head}>
            <div
                style={style.logo}
            >
                2048
        </div>
            <div
                style={style.newGameButtonBlock}
            >
                <div onClick={props.reset} style={style.newGameButton}>
                    NEW GAME
          </div>
            </div>
        </div>
    );
};
export default Head;







