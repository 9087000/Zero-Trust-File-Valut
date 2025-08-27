import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: '1px solid #eee',
                padding: '20px',
                display: 'flex',
                gap: 16,
                flexWrap: 'wrap'
            }}
        >
            <Link to="/about">About Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/contact">Contact Us</Link>
            <span style={{ marginLeft: 'auto' }}>
                © {new Date().getFullYear()} ZeroVault
            </span>
        </footer>
    )
}