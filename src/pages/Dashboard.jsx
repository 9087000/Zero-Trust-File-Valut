import React, { useState } from 'react';
import api from '../api/client';

export default function Dashboard(){
  const [file, setFile] = useState(null);
  const [objectKey, setObjectKey] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function uploadDemo(){
    if(!file) return;
    setLoading(true);
    try{
      // your existing demo upload target (replace if you wired presigned PUT)
      // For demo, we just set a fake objectKey like you had:
      const key = `${crypto.randomUUID()}-${file.name}`;
      // TODO: call your real upload endpoint/presign+PUT here
      setObjectKey(key);
    } finally{
      setLoading(false);
    }
  }

  async function createShare(){
    if(!objectKey) return;
    setLoading(true);
    try{
      const { data } = await api.post('/share', { objectKey, ttlMinutes:4, maxDownloads:1 });
      setResult({
        token: data.token,
        expiresAt: data.expiresAt
      });
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1 className="page-title">Dashboard</h1>

      <div className="grid">
        <section className="card">
          <h3 style={{marginTop:0}}>Upload to MinIO <span className="badge">demo</span></h3>
          <p className="help">Choose a file, then upload. Copy/confirm the object key before creating a share link.</p>

          <div className="stack" style={{marginTop:12}}>
            <input type="file" onChange={e=>setFile(e.target.files?.[0]||null)} className="input" />
            <button className="btn" onClick={uploadDemo} disabled={!file || loading}>
              {loading ? 'Uploading…' : 'Upload'}
            </button>

            <input
              className="input"
              placeholder="Object key (after upload)"
              value={objectKey}
              onChange={e=>setObjectKey(e.target.value)}
            />
            <button className="btn" onClick={createShare} disabled={!objectKey || loading}>
              {loading ? 'Creating…' : 'Create 4-min, 1-download link'}
            </button>
          </div>

          {result && (
            <div className="result">
              <div><strong>Token:</strong> {result.token}</div>
              <div><strong>Expires:</strong> {new Date(result.expiresAt).toLocaleString()}</div>
              <div style={{marginTop:8}}>
                <a href={`http://localhost:5173/share/${result.token}`} target="_blank" rel="noreferrer">Open share link</a>
              </div>
            </div>
          )}
        </section>

        <section className="card">
          <h3 style={{marginTop:0}}>Public Demo (no login)</h3>
          <p className="help">
            Use <code>/api/share/public</code> via curl/Postman with your object key.
            Limited to one per device/IP per day.
          </p>
        </section>
      </div>
    </div>
  );
}
