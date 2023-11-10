import './App.css';
import Login from './components/LoginPage';
import Register from './components/RegisterPage'
import ForgotPass from './components/forgotPassword'
import TwostepVerification from './components/Twostepverification'
import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import axios from 'axios';

function App() {
  axios.defaults.withCredentials = true;
  return (
<>
<Router>
<Routes>
    <Route path='/' element={<Login/>}/>
    <Route path="/register" element={<Register />} />
    <Route path="/twostepverification" element={<TwostepVerification/>} />
    <Route path="/forgotpassword" element={<ForgotPass />} />

</Routes>
</Router>
</>
  );
}

export default App;
