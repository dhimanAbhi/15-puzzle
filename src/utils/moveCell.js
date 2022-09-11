export  const moveCell = (clickedCell,cellsData, setCellsData,emptyCell, setEmptyCell, setMoves) => {
    const condition     =   (clickedCell.x-1 === emptyCell.x && clickedCell.y === emptyCell.y ) ||
                            (clickedCell.x+1 === emptyCell.x && clickedCell.y === emptyCell.y ) ||
                            (clickedCell.x === emptyCell.x && clickedCell.y+1 === emptyCell.y ) ||
                            (clickedCell.x === emptyCell.x && clickedCell.y-1 === emptyCell.y );
    

    if(condition){
        setCellsData(cellsData.map((cellData) => (
            (cellData.value === clickedCell.value)?
                {...cellData, value: 0}:(
                    (cellData.value === 0)?
                        {...cellData, value:clickedCell.value}:
                            cellData
    ))))

    setEmptyCell({x: clickedCell.x, y: clickedCell.y})
    setMoves((prevState) => prevState+1)                
    }

}