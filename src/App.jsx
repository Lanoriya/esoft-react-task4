import './App.css';
import './components/styles/base.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CountdownTimer } from './components/CountdownTimer';
import { UserList } from './components/UserList';
import { WindowSize } from './components/WindowSize';


export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/task1" element={<CountdownTimer />}/>
        <Route path="/task2" element={<UserList />} />
        <Route path="/task3" element={<WindowSize />} />
      </Routes>
      <Footer />
    </>
  )
}