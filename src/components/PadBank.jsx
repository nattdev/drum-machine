import DrumPad from "./DrumPad";

function PadBank() {

    const pads = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const names = ["Heater-1", "Heater-2", "Heater-3", "Heater-4", "Clap", "Open-HH", "Kick-n'-Hat", "Kick", "Closed-HH"];
    const drumPads = pads.map( (pad, i) => <DrumPad  key={i} id={pad} text={pad} src={names[i]} name={names[i]}/>)

    return (
        <div id="pad-bank">
            {drumPads}
        </div>
    )
}

export default PadBank;