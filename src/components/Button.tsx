import {useState} from "react";

const Button = () => {
    const [count, setCount] = useState(1)
    const handleCount = () => {
        setCount(prev => prev+=1)
    }
    return <>
    external app
        <button onClick={handleCount}>count: {count}</button>

    </>
}

export default Button;