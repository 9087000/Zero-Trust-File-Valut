import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const token = localStorage.getItem('token')
    return (
        <header
            style={{
                display: 'flex',
                gap: 16,
                padding: '12px 20px',
                borderBottom: '1px solid #eee'
            }}
        >
            <Link to="/">ZeroVault</Link>
            <nav style={{ display: 'flex', gap: 12 }}>
                <Link to="/about">About</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/contact">Contact</Link>
                {token ? (
                    <Link to="/dashboard">Dashboard</Link>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </nav>
        </header>
    )
}