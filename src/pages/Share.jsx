import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api/client'
import ExpiryBadge from '../components/ExpiryBadge'


export default function Share(){
const { token } = useParams()
const [state, setState] = useState({ loading:true })


useEffect(()=>{
const run = async () => {
try{
const { data } = await api.get(`/share/${token}`)
setState({ url: data.url, remaining: data.remaining, loading:false })
// auto-start download
window.location.href = data.url
}catch(e){
setState({ error: e.response?.data || 'Link error', loading:false })
}
}
run()
},[token])


if(state.loading) return <p>Fetching link…</p>
if(state.error) return <p style={{color:'crimson'}}>{String(state.error)}</p>
return (
<section>
<h2>File is downloading…</h2>
<p>Remaining downloads: {state.remaining}</p>
</section>
)
}