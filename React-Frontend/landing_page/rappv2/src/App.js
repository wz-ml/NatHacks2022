import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { auth } from './Components/firebase';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"
import Review from "./Components/Review/Review"

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="App">

      
      <Router>
        <Routes>
          <Route path="/review" exact element={<Review/>} />
          <Route path="/" exact element={user ?  <Home /> : <Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
