import React from "react";
import { BsArrowReturnLeft, BsArrowClockwise } from "react-icons/bs";
const nop = () => { };
const ActionPanel = ({ onClickUndo,
    disableUndo,
    onClickReplay,
    disableReplay,
    onClickRedo,
    disableRedo, }) => {

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ textAlign: "center" }}>
                    <h3 className={"range_slider_head" + " " + "unselectable"}>One turn back</h3>
                    <div className={"new_game_button" + ' ' + "margin_btn_BoardSize"} onClick={!disableUndo ? onClickUndo : nop}>
                        <BsArrowReturnLeft />
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h3 className={"range_slider_head" + " " + "unselectable"}>History of moves</h3>
                    <div className={"new_game_button" + ' ' + "margin_btn_BoardSize"} onClick={!disableReplay ? onClickReplay : nop}>
                        <BsArrowClockwise />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionPanel;