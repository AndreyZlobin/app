import { useState } from 'react'
// import AuthModal from "./remote/auth-modal";
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    // const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
        {/*<AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={(data) => {*/}
        {/*    console.log(data)*/}
        {/*    setIsModalOpen(false)*/}
        {/*}}/>*/}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
