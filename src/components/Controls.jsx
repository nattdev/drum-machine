import DisplayName from "./DisplayName";
import PowerSwitch from "./PowerSwitch";
import VolumeControl from "./VolumeControl";

function Controls({name, volumeData, volume, isActiveData, isActive}) {
    return (
        <div id="controls">
            <PowerSwitch isActiveData={isActiveData} isActive={isActive}/>
            <VolumeControl volumeData={volumeData} volume={volume}/>
            <DisplayName name={name}/>
        </div>
    )
}

export default Controls;