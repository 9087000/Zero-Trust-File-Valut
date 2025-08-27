import React from 'react'

export default function ExpiryBadge({ expiresAt }) {
    if (!expiresAt) return null
    const ms = new Date(expiresAt).getTime() - Date.now()
    const secs = Math.max(0, Math.floor(ms / 1000))
    return (
        <span title={new Date(expiresAt).toLocaleString()}>
            Expires in {secs}s
        </span>
    )
}