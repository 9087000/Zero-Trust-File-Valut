import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SessionExpiryModal from './components/SessionExpiryModal'
// src/App.jsx (top of file)
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import Contact from './pages/Contact.jsx';   // <— make sure this path exists
import Login from './pages/Login.JSX';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Share from './pages/Share.jsx';
import api, { setOn401Handler } from './api/client'
export default function App(){
const [expired, setExpired] = useState(false)
setOn401Handler(()=> setExpired(true))
return (
<div className="app">
    <Header/>
    <main style={{minHeight:'70vh', padding:'1rem'}}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/share/:token" element={<Share/>} />
        </Routes>
    </main>
    <Footer/>
    <SessionExpiryModal open={expired} onClose={()=>setExpired(false)} />
</div>
)
}