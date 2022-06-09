import LoginScreen from "./LoginScreen/LoginScreen"
import Laucher from "./Laucher/Laucher"
import { useState } from "react"
import "./App.css"

function App() {

  const [ logIn, setLogIn ]= useState(false)
  function ScreenState() {
    if(logIn == false) {
    return <LoginScreen setLogIn={setLogIn}/>
  } else {
    return <Laucher setLogIn={setLogIn}/>
  }}

  return (
    <div className="main">
      {ScreenState()}
    </div>
  )
}

export default App
