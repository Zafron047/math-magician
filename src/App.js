import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import RandomQuotes from './components/GetApi';
import Header from './components/Header';

function App() {
  return (
    <div className="Calc-app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/GetApi" element={<RandomQuotes />} />
      </Routes>
    </div>
  );
}

export default App;
