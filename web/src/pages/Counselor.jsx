
import React from 'react'
import { db, auth, signInAnonymously } from '../firebase.js'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
export default function Counselor(){ const sn = localStorage.getItem('studentNumber')||'Unknown'; async function submit(e){ e.preventDefault(); const name=e.target.name.value; const subject=e.target.subject.value; const message=e.target.message.value; if(!subject||!message) return alert('Fill required'); await addDoc(collection(db,'counselor_messages'), { name, subject, message, studentNumber: sn, createdAt: serverTimestamp(), status:'new' }); alert('Sent') }
  return (<div className="container"><div className="card"><h4>Contact Counselor</h4><form onSubmit={submit}><input name="name" className="form-control mb-2" placeholder="Your name (optional)"/><input name="subject" className="form-control mb-2" placeholder="Subject" required/><textarea name="message" className="form-control mb-2" placeholder="Message" required></textarea><button className="button" type="submit">Send</button></form></div></div>) }
