import React, { useState, useEffect, useCallback, useMemo } from "react";
import backgroundMelody from '../audios/background_melody.mp3';
import RangeSlider from "./RangeSlider"
import useLocalStorage from '../hooks/useLocalStorage';

const VolumeMenu = () => {

    const [audio] = useState(new Audio(backgroundMelody));
    const [parentVal, setParentVal] = useLocalStorage("parentVal", 2);
    const [playing, setPlaying] = useState(false,);
    audio.volume = parentVal / 10;

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
        </div>
    );

};

export default VolumeMenu;








