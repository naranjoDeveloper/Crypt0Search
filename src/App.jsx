import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import TableCoins from './components/TableCoins'

function App() {

  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState('');



  const getCoinData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&page=1');
    setCoins(res.data)
  }

  useEffect(() => {
    getCoinData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-4 mb-3">Busqueda De CriptoMonedas</h1>
      <div className="row">
        <input type="text" placeholder="Busca Alguna CriptoMoneda" className="form-control bg-dark text-light border-0 mt-4 text-center text-white" onChange={e=>setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  )
}

export default App
