
import React, {useState} from 'react'
import { db } from '../firebase.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
export default function Journals(){ const sn = localStorage.getItem('studentNumber')||'Unknown'; const [text,setText]=useState(''); async function save(){ await addDoc(collection(db,'journals',sn), { text, studentNumber: sn, createdAt: serverTimestamp() }); alert('Saved'); setText('') } return (<div className="container"><div className="card"><h4>Daily Journal</h4><textarea className="form-control" value={text} onChange={e=>setText(e.target.value)} placeholder="Write privately..."/><button className="button" onClick={save} style={{marginTop:8}}>Save</button></div></div>) }
