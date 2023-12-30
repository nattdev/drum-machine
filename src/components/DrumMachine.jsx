import { useState } from "react";
import Controls from "./Controls";
import PadBank from "./PadBank";

function DrumMachine() {

    const [name, setName] = useState('');

    const displayName = (name) => {
        setName(name);
    }

    return (
        <div id="drum-machine">
            <Controls name={name}/>
            <PadBank displayName={displayName}/>
        </div>
    )
}

export default DrumMachine;