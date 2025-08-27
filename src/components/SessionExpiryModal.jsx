import React from 'react'

export default function SessionExpiryModal({ open, onClose }) {
    if (!open) return null
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,.4)',
                display: 'grid',
                placeItems: 'center'
            }}
        >
            <div
                style={{
                    background: '#fff',
                    padding: 24,
                    borderRadius: 12,
                    width: 360
                }}
            >
                <h3>Session expired</h3>
                <p>Your session has ended. Please log in again to continue.</p>
                <button
                    onClick={() => {
                        onClose()
                        window.location.href = '/login'
                    }}
                >
                    Go to Login
                </button>
            </div>
        </div>
    )
}