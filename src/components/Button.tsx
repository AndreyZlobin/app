import {memo, useCallback, useState} from "react";

console.log(useState)
const Button = memo(() => {
    const [count, setCount] = useState(1)
    const handleCount = useCallback(() => {
        setCount(prev => prev+=1)
    }, [])
    console.log(count)
    return <div>
    external app from vercel
        <button onClick={handleCount}>count: {count}</button>
{/*<button>sdsdsdsd</button>*/}
    </div>
})

export default Button;