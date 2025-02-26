import { useState } from 'react'
import VideoUpload from './components/VideoUpload'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex  flex-col items-center space-y-9 justify-center py-9'>
        <h1 className='text-2xl font-bold text-gray-700 dark:text-gray-100'>
         Welcome to video streaming application
        </h1>
        <VideoUpload />
      </div>
    </>
  )
}

export default App
