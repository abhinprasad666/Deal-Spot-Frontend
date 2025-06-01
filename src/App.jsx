import Navbar from './components/header/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Link } from "react-router-dom";
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
 <Navbar/>
 <Signup/>
 <Login/>
  <Footer/>
    </div>
  )
}

export default App
