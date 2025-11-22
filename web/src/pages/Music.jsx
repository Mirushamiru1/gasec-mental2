
import React from 'react'
export default function Music(){ return (<div className="container"><div className="card"><h4>Relaxation Music</h4><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}><div className="card"><h5>Nature</h5><audio controls src="/assets/audio/nature.wav" style={{width:'100%'}}/></div><div className="card"><h5>Lo-fi</h5><audio controls src="/assets/audio/lofi.wav" style={{width:'100%'}}/></div><div className="card"><h5>Ocean</h5><audio controls src="/assets/audio/ocean.wav" style={{width:'100%'}}/></div></div></div></div>) }
