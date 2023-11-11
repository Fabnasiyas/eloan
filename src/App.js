// import './App.css';
// import Login from './components/LoginPage';
// import Register from './components/RegisterPage'
// import ForgotPass from './components/forgotPassword'
// import TwostepVerification from './components/Twostepverification'
// import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';

// function App() {
//   const { user,  refresh } = useSelector((state) => state);
//   axios.defaults.withCredentials = true;
//   const dispatch = useDispatch();

//   return (
// <>
// <Router>
// <Routes>
//     <Route path='/' element={<Login/>}/>
//     <Route path="/register" element={<Register />} />
//     <Route path="/twostepverification" element={<TwostepVerification/>} />
//     <Route path="/forgotpassword" element={<ForgotPass />} />

// </Routes>
// </Router>
// </>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';
import ForgotPass from './components/forgotPassword';
import TwostepVerification from './components/Twostepverification';

function App() {
  const { user, refresh } = useSelector((state) => state);
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios.get('/register')
  //     .then((response) => {
  //       console.log("USER:", response.data);
  //       dispatch({ type: 'user', payload: { login: response.data.logged, details: response.data.details } });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [refresh, dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/twostepverification" element={<TwostepVerification />} />
          <Route path="/forgotpassword" element={<ForgotPass />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
