import React, { useState, useEffect, useCallback, useMemo } from "react";
import backgroundMelody from '../audios/background_melody.mp3';
import RangeSlider from "./RangeSlider"
import useLocalStorage from '../hooks/useLocalStorage';
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from "react-icons/bs";

const VolumeMenu = ({ onChildClick }) => {
    const [audio] = useState(new Audio(backgroundMelody));
    const [parentVal, setParentVal] = useLocalStorage("parentVal", 2);
    const [playing, setPlaying] = useState(false,);
    audio.volume = parentVal / 10;

    const toggle = () => setPlaying(!playing);

    const muteSound = (vol) => {
        setParentVal(vol);
    }

    function handleClick(event) {
        // do something meaningful
        onChildClick(event);
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    const sliderValueChanged = useCallback(val => {
        console.log("NEW VALUE", val);
        setParentVal(val);
    });

    const sliderProps = useMemo(
        () => ({
            min: 0,
            max: 10,
            value: parentVal,
            step: 1,
            onChange: e => sliderValueChanged(e)
        }),
        [parentVal]
    );

    return (
        <div className="range_slider">
            <RangeSlider {...sliderProps} />
            <button onClick={toggle} className={"range_slider_button"}>{playing ? "Pause" : "Play"}</button>
            <button value="0" onClick={() => { muteSound(0); handleClick(0) }} className={"range_slider_button"} > <BsFillVolumeMuteFill style={{ fontSize: "20" }} /></button>
            <button value="0" onClick={() => { muteSound(2); handleClick(0.2) }} className={"range_slider_button"} > <BsFillVolumeUpFill style={{ fontSize: "20" }} /></button>
        </div>
    );

};

export default VolumeMenu;








