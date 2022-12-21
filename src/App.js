
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoadingScreen from './components/screens/LoadingScreen'

function App() {
  const location = useLocation()
  return (
    <>
     <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoadingScreen/>} />
     </Routes>
    </>
  );
}

export default App;
