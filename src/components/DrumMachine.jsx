import { useState } from "react";
import Controls from "./Controls";
import PadBank from "./PadBank";
import Footer from "./Footer";
import Header from "./Header";

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
        <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
            <div className="flex flex-col items-center justify-center" id="drum-machine">
                <Header />
                <Controls name={name} volumeData={volumeData} volume={volume} isActiveData={isActiveData} isActive={isActive} />
                <PadBank displayName={displayName} volume={volume} isActive={isActive} />
                <Footer />
            </div>
        </div>
    )
}

export default DrumMachine;