import blockMovement from '../audios/block_movement.mp3';

const blockMovementPlayAudio = () => {
    const sound = new Audio(blockMovement);
    sound.volume = 0.2;
    return sound.play();
}

export default blockMovementPlayAudio;