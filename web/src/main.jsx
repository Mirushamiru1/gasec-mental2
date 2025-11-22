
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Music from './pages/Music'
import Tracker from './pages/Tracker'
import Counselor from './pages/Counselor'
import Rules from './pages/Rules'
import Admin from './pages/Admin'
import Journals from './pages/Journals'
import Appointments from './pages/Appointments'
import './styles.css'
function App(){ return (<BrowserRouter><Routes><Route path='/' element={<Login/>}/><Route path='/dashboard' element={<Dashboard/>}/><Route path='/chat' element={<Chat/>}/><Route path='/music' element={<Music/>}/><Route path='/tracker' element={<Tracker/>}/><Route path='/counselor' element={<Counselor/>}/><Route path='/rules' element={<Rules/>}/><Route path='/admin' element={<Admin/>}/><Route path='/journals' element={<Journals/>}/><Route path='/appointments' element={<Appointments/>}/></Routes></BrowserRouter>) }
createRoot(document.getElementById('root')).render(<App />)
