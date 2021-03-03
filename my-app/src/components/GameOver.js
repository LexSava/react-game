const GameOver = ({ reset }) => {
    
    return (
        <div className={"game_over_overlay"}>
            <div>
                <div
                    className={"game_over_overlay_message"}
                >
                    Game Over
                </div>
                <div>
                    <div>
                        <div onClick={reset} className={"try_again_button"}>
                            Try Again
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GameOver;