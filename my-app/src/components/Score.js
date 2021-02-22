import style from "../style/style";
import React from 'react';

const Score = ({ score }) => {
    return (
        <div style={style.scoreBlock}>
            <div style={{ ...style.scoreBlockElement, ...style.scoreBlockElementRight }}
            >
                <span style={style.scoreBlockElementHead}>
                    score
                </span>
                <span>
                    {score}
                </span>
            </div>
            <div style={style.scoreBlockElement}>
                <span style={style.scoreBlockElementHead}>
                    best
                </span>
                <span>
                    {score}
                </span>
            </div>
        </div >
    );
};
export default Score;







