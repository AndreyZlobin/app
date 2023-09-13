import {memo, useCallback, useState} from "react";

const Button = memo(() => {
    const [count, setCount] = useState(1)
    const handleCount = useCallback(() => {
        setCount(prev => prev+=1)
    }, [])
    return (
        <div>
            external app from vercel
            <button onClick={handleCount}>count: {count}</button>
        </div>
    )
})

export default Button;