/**
 * @file React frontend for the Fitness Service App
 * @author Manav Patel <mpate136@uottawa.ca>
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Redirect, } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import Trainers from './pages/Trainers';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <div className="background">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/trainers" Component={Trainers} />
            <Route exact path="/profile" Component={Profile} />
            <Route exact path="/contact" Component={Contact} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </>
  );
}

export default App;
