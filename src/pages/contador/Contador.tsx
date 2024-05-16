import { useState } from "react"

function Contador() {

    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    }

    const handleDecrement = () => {

        if (value === 0) {
            return;
        }
        setValue(value - 1);
    }

    return (
        <>
            <h2>Contador</h2>

            <p>O valor atual é : {value}</p>

            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
        </>
    )
}

export default Contador