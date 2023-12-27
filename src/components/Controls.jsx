import DisplayName from "./DisplayName";
import PowerSwitch from "./PowerSwitch";
import VolumeControl from "./VolumeControl";

function Controls() {
    return (
        <div id="controls">
            <PowerSwitch />
            <VolumeControl />
            <DisplayName />
        </div>
    )
}

export default Controls;