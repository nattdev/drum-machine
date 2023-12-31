import { useEffect, useRef } from "react";

function PowerSwitch({isActiveData, isActive}) {

    useEffect(() => {
        inputRef.current.checked = isActive;
    }, []);

    const inputRef = useRef();

    const handleisActive = () => {
        const input = inputRef.current;
        isActiveData(input.checked);
    };


    return (
        <div className="power-switch">
            <label className="switch">
                <input ref={inputRef} type="checkbox" onChange={handleisActive}/>
                    <span className="slider"></span>
            </label>
        </div>
    )
}

export default PowerSwitch;