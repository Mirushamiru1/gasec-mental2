
import React, {useState} from 'react'
import { db } from '../firebase.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
export default function Appointments(){ const sn = localStorage.getItem('studentNumber')||'Unknown'; const [date,setDate]=useState(''); async function request(){ if(!date) return alert('Pick date'); await addDoc(collection(db,'appointments'), { studentNumber: sn, date, createdAt: serverTimestamp(), status:'pending' }); alert('Requested') } return (<div className="container"><div className="card"><h4>Request Appointment</h4><input className="form-control" type="date" value={date} onChange={e=>setDate(e.target.value)}/><button className="button" onClick={request} style={{marginTop:8}}>Request</button></div></div>) }
