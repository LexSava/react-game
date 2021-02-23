import style from "../style/style";
// import useSound from 'use-sound';
// import backgroundMelody from '../audios/background_melody.mp3';
import React, { useState, useEffect, handleChange, useCallback, useMemo } from "react";
import backgroundMelody from '../audios/background_melody.mp3';
import RangeSlider from "./RangeSlider"
import useLocalStorage from '../hooks/useLocalStorage';

const VolumeMenu = () => {

    const [audio] = useState(new Audio(backgroundMelody));
    const [parentVal, setParentVal] = useLocalStorage("parentVal", 2);
    audio.volume = parentVal / 10;
    const [playing, setPlaying] = useState(false,);

    const toggle = () => setPlaying(!playing);

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

    // const [parentVal, setParentVal] = useState(2);

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
            label: "This is a reusable slider",
            onChange: e => sliderValueChanged(e)
        }),
        [parentVal]
    );

    return (
        <div>
            <RangeSlider {...sliderProps} />
            <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );

};

export default VolumeMenu;








