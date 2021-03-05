const blockMovementPlayAudio = (volume = 0.2) => {
    const sound = new Audio("./audios/block_movement.mp3");
    sound.volume = volume;
    return sound.play();
}

export default blockMovementPlayAudio;