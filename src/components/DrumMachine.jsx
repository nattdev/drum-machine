import { useState } from "react";
import Controls from "./Controls";
import PadBank from "./PadBank";

function DrumMachine() {

    const [name, setName] = useState('');
    const [volume, setVolume] = useState(1);

    const displayName = (name) => {
        setName(name);
    }

    const volumeData = (volume) => {
        const volumeLevel = parseFloat(volume);
        setVolume(volumeLevel);
    }

    return (
        <div id="drum-machine">
            <Controls name={name} volumeData={volumeData} volume={volume}/>
            <PadBank displayName={displayName} volume={volume}/>
        </div>
    )
}

export default DrumMachine;