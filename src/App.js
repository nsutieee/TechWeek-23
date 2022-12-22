
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoadingScreen from './components/screens/LoadingScreen'
import HomeScreen from './components/screens/HomeScreen';

function App() {
  const location = useLocation()
  return (
    <>
     <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoadingScreen/>} />
      <Route path="/home" element={<HomeScreen/>} />
     </Routes>
    </>
  );
}

export default App;
