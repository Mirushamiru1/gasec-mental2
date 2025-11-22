
import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Dashboard(){ const sn = localStorage.getItem('studentNumber')||'Guest'; const nav = useNavigate(); function logout(){ localStorage.removeItem('studentNumber'); nav('/') }
  return (<div className="container"><div className="nav"><div><strong>GASEC</strong></div><div><span style={{marginRight:12,color:'#fff'}}>ID: {sn}</span><button className="button" onClick={logout}>Logout</button></div></div><div style={{marginTop:18}} className="card"><h3>Welcome {sn}</h3><p className="small">Choose a feature</p><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:18}}><a className="card" href="/chat">Anonymous Chat</a><a className="card" href="/music">Relaxation Music</a><a className="card" href="/tracker">Well-being Tracker</a><a className="card" href="/counselor">Contact Counselor</a><a className="card" href="/journals">Journals</a><a className="card" href="/appointments">Appointments</a></div></div></div>)
}
