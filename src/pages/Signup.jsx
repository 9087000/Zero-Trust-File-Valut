import React, { useState } from 'react'
import api from '../api/client'

export default function Signup() {
    const [username, setU] = useState('')
    const [password, setP] = useState('')
    const [err, setErr] = useState('')

    const submit = async e => {
        e.preventDefault()
        setErr('')
        try {
            const { data } = await api.post('/auth/signup', { username, password })
            localStorage.setItem('token', data.token)
            window.location.href = '/dashboard'
        } catch (e) {
            setErr(e.response?.data || 'Signup failed')
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
            <h2>Create account</h2>
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
            <button>Sign up</button>
        </form>
    )
}