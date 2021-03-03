const Score = ({ score, best }) => {
    
    return (
        <div className={"score_block"}>
            <div className={"score_block_element"}>
                <span className={"score_block_element_head"}>
                    score
                </span>
                <span>
                    {score}
                </span>
            </div>
            <div className={"score_block_element"}>
                <span className={"score_block_element_head"}>
                    best
                </span>
                <span>
                    {best}
                </span>
            </div>
        </div>
    );
};

export default Score;







