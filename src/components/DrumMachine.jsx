import Controls from "./Controls";
import PadBank from "./PadBank";

function DrumMachine() {

    const handlePlayAudio = (event) => {
        const audio = event.target.firstElementChild;
        audio.currentTime = 0;
        audio.play();
    };

    return (
        <div id="drum-machine">
            <Controls />
            <PadBank onClick={handlePlayAudio}/>
        </div>
    )
}

export default DrumMachine;