
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { signInAnonymously, auth } from '../firebase.js'
export default function Login(){
  const [sn,setSn]=useState(''); const nav = useNavigate()
  async function submit(e){ e.preventDefault(); if(!sn) return alert('Enter student number'); try{ await signInAnonymously(auth) }catch{} localStorage.setItem('studentNumber',sn); nav('/dashboard') }
  return (<div className="container"><div style={{maxWidth:460,margin:'60px auto'}} className="card"><h2>GASEC Mental Health</h2><p className="small">Dedicate, Educate, Inspire</p><form onSubmit={submit}><input className="form-control" value={sn} onChange={e=>setSn(e.target.value)} placeholder="Student number e.g. S12345"/><button className="button" style={{marginTop:12}}>Enter</button></form></div></div>)
}
