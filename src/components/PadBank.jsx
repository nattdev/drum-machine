import DrumPad from "./DrumPad";

function PadBank({ displayName, volume, isActive }) {
    const pads = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const names = ["Heater-1", "Heater-2", "Heater-3", "Heater-4", "Clap", "Open-HH", "Kick-n'-Hat", "Kick", "Closed-HH"];
    const drumPads = pads.map((pad, i) => <DrumPad displayName={displayName} key={i} id={pad} text={pad} src={names[i]} name={names[i]} volume={volume} isActive={isActive}/>)

    return (
        <div id="pad-bank" className="grid-cols-3 grid gap-4 m-6">
            {drumPads}
        </div>
    )
}

export default PadBank;