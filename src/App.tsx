import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Logic/Navigation/Header';
import Settings from './Site_Pages/Settings';
import LoginForm from './components/Logic/Navigation/Login';
import Catches from './Site_Pages/catches';
import GearTracking from './Site_Pages/gear_tracking';
import About from './Site_Pages/about';
import PastDivesPage from './Site_Pages/PastDives';
import SignUp from './components/Logic/Navigation/Sign_up';
import TrainingPage from './Site_Pages/training_page';
import Home from './Site_Pages/Home';
import NewDive from './Site_Pages/newdive';
import Footer from './components/Logic/Navigation/Footer';

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSignUp = (email: string, password: string) => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <HashRouter>
      <Header />
      <div>
        </div>
        <div className='px-60 space-y-10'>
          <Routes>
            <Route path="" element={<Home/>} />
            <Route path='/about-spear-io' element={<About />} />
            <Route path="/New-Dive" element={<NewDive />} />
            <Route path="/gear-tracking" element={<GearTracking />} />
            <Route path="/Catches" element={<Catches />} />
            <Route path="/Past-Dives" element={<PastDivesPage />} />
            <Route
              path="/login"
              element={<LoginForm onLogin={handleLogin} />}
            />
            <Route
              path="/sign-up"
              element={<SignUp/>}
            />
          </Routes>
        </div>
        <div>
          <Footer/>
        </div>
    </HashRouter>
  );
}

export default App;
