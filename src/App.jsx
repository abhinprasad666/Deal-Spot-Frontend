import Navbar from './components/header/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Footer from './components/Footer';
import Home from './pages/Home';


const App = () => {
  return (
    <div>
 <Navbar/>
 <Home/>
 <Signup/>
 <Login/>
  <Footer/>
    </div>
  )
}

export default App
