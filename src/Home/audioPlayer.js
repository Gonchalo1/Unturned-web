// AudioPlayer.js

import React, { useRef, useState } from 'react';
import backgroundMusic from '../audio/home.mp3';

const AudioPlayer = () => {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        if (audioPlaying) {
            audioRef.current.pause();
            setAudioPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => setAudioPlaying(true))
                .catch(error => console.log('Error al reproducir audio:', error));
        }
    };

    return (
        <div className="audio-container">
            <audio ref={audioRef}>
                <source src={backgroundMusic} type="audio/mpeg" />
                Tu navegador no soporta la etiqueta de audio.
            </audio>
            <button className="btn btn-primary audio-button" onClick={toggleAudio}>
                {audioPlaying ? 'Pause Audio' : 'Play Audio'}
            </button>
        </div>
    );
};

export default AudioPlayer;
