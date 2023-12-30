import DisplayName from "./DisplayName";
import PowerSwitch from "./PowerSwitch";
import VolumeControl from "./VolumeControl";

function Controls({name}) {
    return (
        <div id="controls">
            <PowerSwitch />
            <VolumeControl />
            <DisplayName name={name}/>
        </div>
    )
}

export default Controls;