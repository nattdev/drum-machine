import { useRef } from "react";

function VolumeControl({ volumeData, volume }) {

    const inputRef = useRef();

    const handleVolumeControl = () => {
        const input = inputRef.current;
        volumeData(input.value);
    };

    return (
        <div className="volume-control">
            <form>
                <input ref={inputRef} className="rounded-lg" onChange={handleVolumeControl} type='range' min='0' max='1' step='0.1' /><label className="inline-block w-8">{volume}</label>
            </form>
        </div>
    )
}

export default VolumeControl;