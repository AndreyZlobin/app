import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AuthModal from "./remote/auth-modal";
import './App.css'
import Button from "@mui/joy/Button";

function App() {
  const [count, setCount] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

        <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={(data) => {
            console.log(data)
            setIsModalOpen(false)
        }}/>
        <Button variant="outlined" color="neutral" onClick={() => setIsModalOpen(true)}>
            Open modal
        </Button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
