import { useRef } from "react";
import { useEffect } from "react";

function DrumPad({ id, text, name }) {

    const audioRef = useRef();

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleKeyDown = (event) => {
        const key = event.key.toUpperCase();
        const audio = audioRef.current;

        if (key == id) {
            audio.currentTime = 0;
            audio.play();
        }
    }

    const handlePlayAudio = () => {
        const audio = audioRef.current;

        audio.currentTime = 0;
        audio.play();
    };

    return (
        <div id={name} onClick={handlePlayAudio} className="drum-pad">
            <audio ref={audioRef} id={id} className="clip" src={`src/assets/${name}.mp3`}></audio>
            {text}
        </div>
    )
}

export default DrumPad;