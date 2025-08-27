import React, { useState } from 'react'
import api from '../api/client'

export default function Dashboard() {
    const [file, setFile] = useState(null)
    const [objKey, setObjKey] = useState('')
    const [share, setShare] = useState(null)
    const [err, setErr] = useState('')

    const upload = async () => {
        if (!file) return
        // create a random object key
        const key = `${crypto.randomUUID()}-${file.name}`
        setObjKey(key)
        // get presign for upload (reuse share create uses objectKey directly, presign we do via Storage via backend or direct policy; here, simplify: PUT directly using presign from /api/share -> presign not separate to keep code small)
        // We'll just PUT to MinIO using a utility endpoint; for brevity, we skip and assume object placed separately.
        alert('For brevity, upload to MinIO using its console or add a /api/storage/presign endpoint similarly to download presign.')
    }

    const createShare = async () => {
        try {
            const { data } = await api.post('/share', { objectKey: objKey, ttlMinutes: 4, maxDownloads: 1 })
            setShare(data)
        } catch (e) {
            setErr(e.response?.data || 'Failed to create share')
        }
    }

    return (
        <section style={{ maxWidth: 720, margin: '20px auto', display: 'grid', gap: 16 }}>
            <h2>Dashboard</h2>
            <div style={{ display: 'grid', gap: 8 }}>
                <input type='file' onChange={e => setFile(e.target.files?.[0])} />
                <button onClick={upload}>Upload to MinIO (demo)</button>
                <input
                    placeholder='Object key (after upload)'
                    value={objKey}
                    onChange={e => setObjKey(e.target.value)}
                />
                <button onClick={createShare} disabled={!objKey}>
                    Create 4‑min, 1‑download link
                </button>
            </div>
            {share && (
                <div>
                    <div>Token: {share.token}</div>
                    <div>Expires: {new Date(share.expiresAt).toLocaleString()}</div>
                    <a href={`/share/${share.token}`} target='_blank'>Open share link</a>
                </div>
            )}
            {err && <div style={{ color: 'crimson' }}>{err}</div>}
            <hr />
            <h3>Public Demo (no login)</h3>
            <p>
                Use the <code>/api/share/public</code> endpoint via curl/Postman with your object key. Limited to one per device/IP per day.
            </p>
        </section>
    )
}