function VolumeControl() {
    return (
        <div className="volume-control">
            <form>
                <input type='range' min='0' max='1' step='0.1' />
            </form>
        </div>
    )
}

export default VolumeControl;