import { useState } from "react";
const Promos = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(prevCount => prevCount + 1);
    const Deacrease = () => setCount(prevCount => prevCount - 1);
    return (
        <section className="component">
            <p>Promos</p>
            <div>Currentcount is {count}</div>
            <button onClick={increase}>+</button>
            <button onClick={Deacrease}>-</button>
        </section >
    )
}

export default Promos;    