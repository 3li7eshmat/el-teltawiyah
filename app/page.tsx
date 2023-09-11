'use client'
import { useEffect, useState } from 'react'
import Cell from './components/Cell'

export default function Home() {
  const winningCompos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    [0, 3, 6],
    [1, 4 ,7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', ''])
  const [go, setGo] = useState('cross')
  const [winningMessage, setWinningMessage] = useState('')

  useEffect(() => {
    winningCompos.forEach((compo) => {
      const cyrcleWins = compo.every((cell) => cells[cell] === 'cyrcle')
      const crossWins = compo.every((cell) => cells[cell] === 'cross')
      console.log(cyrcleWins, crossWins)
      if (cyrcleWins) {
        setWinningMessage('Cyrcle win')
      }else if (crossWins) {
        setWinningMessage('Cross Win')
      }
    })
  }, [cells])

  useEffect(() => {
    if (cells.every(cell => cell !== '') && !winningMessage) {
      setWinningMessage("Drow!")
    }
  }, [cells, winningMessage])

  return (
    <main className='container'>
      <div className='game-board'>
        {cells.map((cell, index) => (
          <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} cell={cell} winningMessage={winningMessage}/>
        ))}
      </div>
      <div>{winningMessage}</div>
      {!winningMessage && <div>{`It's now ${go}'s turn!`}</div>}
    </main>
  )
}
