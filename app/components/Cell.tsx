'use client'
import { Dispatch, SetStateAction } from "react";

type cellStates = {
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    id: number;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>
    cell: string;
    winningMessage: string;
}
const Cell = ({ go, setGo, id, cells, setCells, cell, winningMessage }: cellStates) => {

    const handleClick = () => {
        if (winningMessage) {
            return;
        }
        const notTaken = !cells[id];

        if (notTaken) {
            if (go === 'cross') {
                handleChange('cross')
                setGo('cyrcle')
            } else if (go === 'cyrcle') {
                handleChange('cyrcle')
                setGo('cross')
            }
        }
    }

    const handleChange = (cellToChange: string) => {
        let copyCells = [...cells]
        copyCells[id] = cellToChange
        setCells(copyCells)
    }

    return <div className="square" onClick={handleClick}>
        <div className={cell}>{cell ? (cell === 'cross' ? 'X' : 'O') : ''}</div>
    </div>
}

export default Cell