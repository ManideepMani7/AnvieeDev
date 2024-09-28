import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomeComponent from "./Components/HomeComponent/HomeComponent"
import Footer from "./Components/HomeComponent/FooterComponent"
import Navigation from "./Components/Navigation/Navigation"
import { LoginPage } from "./Components/LoginPageComponent.tsx/LoginPage"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/"  element={<HomeComponent/>}/>
            <Route path="/LoginPage" element={<LoginPage></LoginPage>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
