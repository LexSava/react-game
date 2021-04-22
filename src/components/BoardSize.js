import React from "react";

const BoardSize = () => {

    const options = [
        {
            label: "4 x 4",
            value: 4,
        },
        {
            label: "5 x 5",
            value: 5,
        },
        {
            label: "6 x 6",
            value: 6,
        },
    ];

    return (
        <div >
            <h3 className={"range_slider_head" + " " + "unselectable"}>Board size</h3>
            {options.map((option) => (
                <button key={option.value} value={option.value} className={"new_game_button" + ' ' + "margin_btn_BoardSize"}>{option.label} </button>
            ))}
        </div>
    );
};

export default BoardSize;







