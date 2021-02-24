import Score from "./Score";

const Head = ({ reset, score, best }) => {
    return (
        <div className={"head"}>
            <div className={"logo"}>
                2048
            </div>
            <div> <Score score={score} best={best} />
                <div className={"new_game_button_block"}>
                    <div onClick={reset} className={"new_game_button"}>
                        NEW GAME
          </div>
                </div>
            </div>
        </div> 
    );
};

export default Head;







