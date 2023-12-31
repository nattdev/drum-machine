import { useState } from "react";
import Controls from "./Controls";
import PadBank from "./PadBank";

function DrumMachine() {

    const [name, setName] = useState('');
    const [volume, setVolume] = useState(1);
    const [isActive, setIsActive] = useState(true);


    const displayName = (name) => {
        setName(name);
    }

    const volumeData = (volume) => {
        const volumeLevel = parseFloat(volume);
        setVolume(volumeLevel);
    }

    const isActiveData = (isActive) => {
        setIsActive(isActive);
    };

    return (
        <div id="drum-machine">
            <Controls name={name} volumeData={volumeData} volume={volume} isActiveData={isActiveData} isActive={isActive}/>
            <PadBank displayName={displayName} volume={volume} isActive={isActive}/>
        </div>
    )
}

export default DrumMachine;