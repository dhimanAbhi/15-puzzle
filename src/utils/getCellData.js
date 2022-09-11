const getRandomNumber = () => {
    return Math.floor(Math.random() * (15 - 0 + 1) + 0)
}

export let emptyCoord;


export const getCellData = () =>{
        let arr = [];
        let rndNum;
        for(let i=0;i<16;i++){
            do {
                rndNum = getRandomNumber();
            } while (arr.includes(rndNum));
                arr.push(rndNum);
            }
    
        let data = [];
        let k=0;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                data = [...data, {
                    x:i,
                    y:j,
                    key:(k==16)?0:k+1,
                    value:arr[k]
                }]
    
                if(arr[k]==0) emptyCoord = {x:i, y:j}
                k++
            } 
        }
        return data
    }

