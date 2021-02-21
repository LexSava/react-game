import style from "../style/style";

const GameOver = (props) => {
    return (
        <div style={style.gameOverOverlay}>
            <div>
                <div
                    style={style.gameOverOverlayMessage}
                >
                    Game Over
                </div>
                <div>
                    <div
                        style={style.tryAgainButtonBlock}
                    >
                        <div onClick={props.reset} style={style.tryAgainButton}>
                            Try Again
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GameOver;