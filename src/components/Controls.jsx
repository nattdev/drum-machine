import DisplayName from "./DisplayName";
import PowerSwitch from "./PowerSwitch";
import VolumeControl from "./VolumeControl";

function Controls({name, volumeData, volume}) {
    return (
        <div id="controls">
            <PowerSwitch />
            <VolumeControl volumeData={volumeData} volume={volume}/>
            <DisplayName name={name}/>
        </div>
    )
}

export default Controls;