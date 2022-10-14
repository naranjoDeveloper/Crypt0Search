import React from 'react'
import CoinRow from './CoinRow'


const tittles = ['#' ,'Moneda' , 'Precio' , 'Cambio De Precio' , 'Volumen Ultimas 24H']


const TableCoins = ({coins,search}) => {

    //filtrado de monedas segun input
    const filteredCoins = coins.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase())
    || coin.symbol.toLowerCase().includes(search.toLowerCase()))

    return (
    <table className="table table-dark mt-4 table-hover">
      <thead>
        <tr>
          {tittles.map((coin , index) =>(
              <td key={index}> {coin} </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} key={index} index={index + 1} />
        ))}

      </tbody>
    </table>
  )
}

export default TableCoins