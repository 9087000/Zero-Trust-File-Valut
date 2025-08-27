import React, { useState } from 'react'
import api from '../api/client'

export default function Login() {
    const [username, setU] = useState('')
    const [password, setP] = useState('')
    const [err, setErr] = useState('')

    const submit = async e => {
        e.preventDefault()
        setErr('')
        try {
            const { data } = await api.post('/auth/login', { username, password })
            localStorage.setItem('token', data.token)
            window.location.href = '/dashboard'
        } catch (e) {
            setErr(e.response?.data || 'Login failed')
        }
    }

    return (
        <form
            onSubmit={submit}
            style={{
                maxWidth: 360,
                margin: '40px auto',
                display: 'grid',
                gap: 12
            }}
        >
            <h2>Sign in</h2>
            <input
                placeholder='Username'
                value={username}
                onChange={e => setU(e.target.value)}
            />
            <input
                placeholder='Password'
                type='password'
                value={password}
                onChange={e => setP(e.target.value)}
            />
            {err && <div style={{ color: 'crimson' }}>{err}</div>}
            <button>Login</button>
        </form>
    )
}