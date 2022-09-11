import React, {useState, useEffect} from 'react'
import { getCellData, emptyCoord } from '../utils/getCellData'
import { moveCell } from '../utils/moveCell';
import Header from './Header';
import {Container, Banner, Welcome, Result, GameArea, Cell, Reset} from '../styles/home.js'

function Home() {
    const initialTime = {seconds:'00', minutes:'00', hours:'00'};
    const data = getCellData();
    const [cellsData, setCellsData] = useState(data)
    const [emptyCell, setEmptyCell] = useState(emptyCoord)
    const [banner, setBanner] = useState(true)
    const [result, setResult] = useState(false)
    const [playerName, setPlayerName] = useState('Guest')
    const [moves, setMoves] = useState(0)
    const [time, setTime] = useState(initialTime)

    const move =(clickedCell) => moveCell(clickedCell,cellsData, setCellsData,emptyCell, setEmptyCell, setMoves)

    const reset = () => {
        setCellsData(getCellData())
        setEmptyCell(emptyCoord)
        setMoves(0)
        if(banner){
            setBanner(false)
            setResult(false)
        }
    }

    useEffect(() => {
        let isWon = true;

        for(let i=0;i<15;i++){
            if(cellsData[i].key !== cellsData[i].value) isWon = false;
        }

        if(isWon){
            setBanner(true);
            setResult(true);
        }

    }, [cellsData])
    
    
    return (
        <>
        { banner?
            <Banner>
                {
                    result?
                    <Result>
                    <h3>YOU WON!</h3>
                    <p>
                        <div id='playern'> NAME: {playerName}</div>
                        <div id='winm' > MOVES: {moves}</div>
                        <div id='wint'>TIME: {time.hours}:{time.minutes}:{time.seconds} </div>
                    </p>
                    <button onClick={reset}>Play Again</button>
                    </Result>
                    :
                    <Welcome>
                        <h3>Welcome To 15-Puzzle</h3>
                        <input type="text" placeholder="Enter your name" onChange={e => setPlayerName(e.target.value)}/>
                        <button onClick={() => setBanner(false)}>Let's Play!</button>
                    </Welcome>
                }
            </Banner>
            :null
        }
        <Header banner={banner} time={time} setTime={setTime} playerName={playerName} moves={moves}/>
        <Container style={{filter: banner? 'blur(8px)': 'none'}} >
            <GameArea>
                {
                    cellsData.map((cellData) => (
                        <Cell key={cellData.value} 
                            style={{backgroundColor: (cellData.value!==0)?(cellData.key === cellData.value)?'#70e000':'#ff006e':'#023047'}} 
                            onClick={() => move(cellData)}>{(cellData.value!==0)?cellData.value:null}
                        </Cell>
                    ))
                }
            </GameArea>
                <Reset onClick={reset}>Reset</Reset>
        </Container>
        </>
    )
}

export default Home
