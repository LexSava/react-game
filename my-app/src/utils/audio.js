const blockMovementPlayAudio = () => {
    const sound = new Audio();
    sound.src = 'audio/block_movement.mp3';
    // sound.src = '../audios/background_melody.mp3';
    sound.volume = 0.2;
    return sound.play();
}

export default blockMovementPlayAudio;