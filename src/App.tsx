
import { InputName } from './components/inputName'
import { InputEmail } from './components/inputEmail'
import { InputPassword } from './components/inputPassword'

import './App.css'
import { useState } from 'react'

function App() {

  const handleSubmit = (event: any) => {
    event.preventDefault()
    alert('Registro enviado')
  }

  const [status, SetStatus] = useState({
    name: false,
    emai: false,
    password: false,
  })

  return (
    <form className="App" onSubmit={handleSubmit}>
      <h2>Create an new account</h2>
      <InputName />
      <InputEmail />
      <InputPassword />
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
