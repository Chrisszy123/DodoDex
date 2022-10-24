import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Exchange from './components/Exchange'
import Dao from "./components/Dao"
import Staking from "./components/Staking"
import YieldFarming from "./components/YieldFarming"

function App() {
  return (
    <BrowserRouter>
      <Nav> 
        <Routes>
          <Route path="/" element={<Exchange />} />
          <Route path="/dao" element={<Dao />} />
          <Route path="/liquidity" element={<Staking />} />
          <Route path="/yieldfarming" element={<YieldFarming />} />
        </Routes>
      </Nav> 
    </BrowserRouter> 
  );
}

export default App;
