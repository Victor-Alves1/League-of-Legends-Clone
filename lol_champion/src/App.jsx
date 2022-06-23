import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

export function App() {

  return (
    <div className="main">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </div>
  )
}
