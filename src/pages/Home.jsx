import React from 'react'

export default function Home() {
    return (
        <section>
            <h1>ZeroVault</h1>
            <p>
                Secure, zero‑trust file sharing with expiring, single‑use links and
                a complete audit trail.
            </p>
            <h3>How it works</h3>
            <ol>
                <li>Upload file via presigned S3/MinIO URL</li>
                <li>Create a share link (expires in 4 minutes by default)</li>
                <li>Receiver opens link and downloads once</li>
            </ol>
            <h3>Architecture</h3>
            <ul>
                <li>Frontend: React + Vite</li>
                <li>API: Spring Boot + JWT</li>
                <li>Storage: MinIO (S3 compatible)</li>
                <li>DB: PostgreSQL</li>
            </ul>
            <h3>Benefits</h3>
            <ul>
                <li>Least‑privilege access with short presigned URLs</li>
                <li>Strong link expiry + download count enforcement</li>
                <li>Full audit logging for compliance</li>
            </ul>
        </section>
    )
}