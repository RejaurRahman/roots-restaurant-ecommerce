import { Route, Routes } from "react-router-dom"

import Home from "./routes/Home/Home.component"
import Navigation from "./routes/Navigation/Navigation.component"

import "./styles/styles.scss"

const Shop = () => {
  return (
    <div>I am shop page</div>
  )
}

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}  />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
