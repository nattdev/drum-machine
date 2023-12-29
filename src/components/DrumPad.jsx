function DrumPad({id, text, src, name, onClick}) {
    return (
        <div id={name} onClick={onClick} className="drum-pad">
            <audio id={id} className="clip" src={`src/assets/${name}.mp3`}></audio>
            {text}
        </div>
    )
}

export default DrumPad;