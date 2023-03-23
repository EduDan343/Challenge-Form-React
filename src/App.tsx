
import { InputName } from './components/inputName'
import { InputEmail } from './components/inputEmail'
import { InputPassword } from './components/inputPassword'

import './App.css'
import { useState } from 'react'

function App() {

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if(status.name && status.email && status.password) {
      alert('Form submitted successfully')
    } else {
      alert('Missing data in the form')
    }
  }

  const [status, setStatus] = useState({
    name: false,
    email: false,
    password: false,
  })

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h2>Create an new account</h2>
      <InputName status={status} fn={setStatus} />
      <InputEmail status={status} fn={setStatus} />
      <InputPassword status={status} fn={setStatus} />
      <button 
        type='submit' 
        style={{ color: 'black', 
        fontSize: '2rem', 
        fontWeight: 'bold', 
        borderRadius: '7px',
        width: '12rem', 
        backgroundColor: 'skyblue',
      }}>
        Sign Up!
      </button>
    </form>
  )
}

export default App
