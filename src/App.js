import { Routes, Route } from "react-router-dom"

import Home from "./routes/Home/Home"

import "./styles/styles.scss"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
      </Routes>
    </div>
  )
}

export default App
