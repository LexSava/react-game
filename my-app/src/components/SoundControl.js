import style from "../style/style";
// import useSound from 'use-sound';
// import backgroundMelody from '../audios/background_melody.mp3';
import React, { useState, useEffect, handleChange } from "react";
import backgroundMelody from '../audios/background_melody.mp3';

const useAudio = url => {
    const [audio] = useState(new Audio(backgroundMelody, { volume: 0.1 }));
    const [playing, setPlaying] = useState(false);

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

    return [playing, toggle];
};

// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url);

//   return (
//     <div>
//       <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//     </div>
//   );
// };

const SoundControl = ({ url }) => {
    const [playing, toggle] = useAudio(url);


    return (
        <div>
            <h4>Sound Volume</h4>
            <input type="range" min="0" max="10" step="1" defaultValue="5" style={style.soundControlInput} onChange={handleChange} />
            <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );
};
export default SoundControl;








