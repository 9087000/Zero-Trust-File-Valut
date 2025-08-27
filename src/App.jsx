import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SessionExpiryModal from './components/SessionExpiryModal'
import Home from './pages/Home'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Share from './pages/Share'
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