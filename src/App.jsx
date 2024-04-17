import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CountdownTimer } from './components/CountdownTimer';
import { UserList } from './components/UserList';
import { WindowSize } from './components/WindowSize';
import './App.css';
import './components/styles/base.css';


export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CountdownTimer />}/>
        <Route path="/task2" element={<UserList />} />
        <Route path="/task3" element={<WindowSize />} />
      </Routes>
    </>
  )
}