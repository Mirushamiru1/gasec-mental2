
import React, {useEffect} from 'react'
import Chart from 'chart.js/auto'
import { db, auth, signInAnonymously } from '../firebase.js'
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore'
export default function Tracker(){ const sn = localStorage.getItem('studentNumber')||'Unknown'
  useEffect(()=>{ (async ()=>{ try{ await signInAnonymously(auth) }catch{} })(); const q = query(collection(db,'moods'), orderBy('createdAt')); const unsub = onSnapshot(q, snap=>{ const arr=[]; snap.forEach(d=>arr.push(d.data())); const mine = arr.filter(a=>a.studentNumber===sn).slice(-20); render(mine); }); return ()=>unsub() },[])
  async function save(v){ await addDoc(collection(db,'moods'), { studentNumber: sn, value: v, createdAt: serverTimestamp() }); alert('Saved') }
  function render(data){ const labels = data.map(d=>new Date(d.createdAt?.toDate?.()||Date.now()).toLocaleString()); const values=data.map(d=>d.value); const ctx=document.getElementById('chart')?.getContext('2d'); if(!ctx) return; if(window._gasecChart) window._gasecChart.destroy(); window._gasecChart = new Chart(ctx, { type:'line', data:{ labels, datasets:[{ label:'Mood', data:values, fill:true, backgroundColor:'rgba(124,92,255,0.12)', borderColor:'#7c5cff' }] } }) }
  return (<div className="container"><div className="card"><h4>Well-being Tracker</h4><div style={{display:'flex',gap:8}}><button className="button" onClick={()=>save(5)}>😃</button><button className="button" onClick={()=>save(4)}>🙂</button><button className="button" onClick={()=>save(3)}>😐</button><button className="button" onClick={()=>save(2)}>😟</button><button className="button" onClick={()=>save(1)}>😢</button></div><div style={{marginTop:12}}><canvas id="chart" height="120"></canvas></div></div></div>) }
