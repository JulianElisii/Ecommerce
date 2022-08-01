import './App.css';
import "react-toastify/dist/ReactToastify.css"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './components/Cart';
import SingUp from './components/singUp';
import SingIn from './components/singIn';
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div >
    <Provider store={store}>
    <Router>
    <ToastContainer/>
      <Navbar />
      <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/singUp' element={<SingUp/>}/>
      <Route path='/singIn' element={<SingIn/>}/>
      </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
