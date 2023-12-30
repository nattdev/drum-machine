import { useRef, useState } from "react";

function VolumeControl({volumeData, volume}) {

    const inputRef = useRef();

    const handleVolumeControl = () => {
        const input = inputRef.current;
        volumeData(input.value);
    };

    return (
        <div className="volume-control">
            <form>
                <input ref={inputRef} onChange={handleVolumeControl} type='range' min='0' max='1' step='0.1' />{volume}
            </form>
        </div>
    )
}

export default VolumeControl;