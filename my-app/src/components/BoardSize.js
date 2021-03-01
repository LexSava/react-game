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
    // function handleChange(event) {
    //     val(event.target.value);
    //     // console.log(event.target.value);
    // }
    return (
        <div >

            <h3 className="range_slider_head">Board size</h3>
            {options.map((option) => (
                <button key={option.value} value={option.value} className={"new_game_button" + ' ' + "margin_btn_BoardSize"}>{option.label} </button>
            ))}


        </div>
    );
    // return (
    //     <div >
    //         <h3>Board size</h3>
    //         <div className="range_slider">
    //             <button value="4" onClick={reset} className={"new_game_button"}>
    //                 4x4
    //       </button>
    //             <button value="5" onClick={reset} className={"new_game_button"} >
    //                 5x5
    //       </button>
    //             <button value="6" onClick={reset} className={"new_game_button"}>
    //                 6x6
    //       </button>
    //         </div>
    //     </div>
    // );
    // const [sizeVal, setSizeVal] = useState(0);

    // const createArray = (e) => {
    //     const arr = [];
    //     const newArray = [];
    //     for (let i = 0; i < e.target.value; i++) {
    //         arr.push(0);
    //         newArray.push(arr)
    //     }
    //     return setSizeVal(newArray);
    // }

    // function handleChange(event) {
    //     val(event.target.value);
    //     // console.log(event.target.value);
    // }

    // return (
    //     <div >
    //         <h3>Playing field size</h3>
    //         <label>
    //             <select title="Select Cell Number" onChange={(ev) => {
    //                 handleChange(ev);
    //                 reset(ev);
    //             }}>
    //                 <option value="4" >4</option>
    //                 <option value="5" >5</option>
    //                 <option value="6" >6</option>
    //                 {/* <option value="7" >7</option>
    //                 <option value="8" >8</option> */}
    //             </select>
    //         </label>
    //         <div onClick={reset} className={"new_game_button"}>
    //             NEW GAME
    //       </div>
    //     </div>
    // );


};

export default BoardSize;







