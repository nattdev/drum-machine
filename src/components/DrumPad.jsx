import { useRef } from "react";
import { useEffect } from "react";

function DrumPad({ id, text, name, displayName, volume, isActive }) {

    const audioRef = useRef();

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleKeyDown = (event) => {
        if (isActive) {
            const key = event.key.toUpperCase();
            const audio = audioRef.current;

            if (key == id) {
                audio.volume = volume;
                audio.currentTime = 0;
                audio.play();
                displayName(audio.getAttribute('name'));
            }
        }
    }

    const handlePlayAudio = () => {
        if (isActive) {
            const audio = audioRef.current;
            audio.volume = volume;
            audio.currentTime = 0;
            audio.play();
            displayName(audio.getAttribute('name'));
        }
    };

    return (
        <div id={name} onClick={handlePlayAudio} className="drum-pad transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-7 rounded cursor-pointer font-bold text-white select-none">
            <audio ref={audioRef} id={id} name={name} className="clip" src={`https://cdn.jsdelivr.net/gh/nattdev/drum-machine/src/assets/${name}.mp3`}></audio>
            {text}
        </div>
    )
}

export default DrumPad;