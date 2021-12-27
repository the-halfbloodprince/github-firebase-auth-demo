import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import TestPrivateEndpoint from './components/TestPrivateEndpoint'
// import { getAuth, onAuthStateChanged } from 'firebase/auth'

function App() {

  // const auth = getAuth()
  // console.log(auth)

  // let isAuthenticated = false

  // onAuthStateChanged(auth, (user) => {
  //   if (user) { isAuthenticated = true }
  // })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route path="/test"  element={isAuthenticated ? <TestPrivateEndpoint /> : <Login />} /> */}
          <Route path="/test"  element={<TestPrivateEndpoint /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
