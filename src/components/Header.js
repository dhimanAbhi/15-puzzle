import React, {useState} from 'react'
import styled from 'styled-components'

function Header({banner, time, setTime, playerName, moves}) {
    const update = (t) =>{
      if(t<10) return '0'+(t%10)
      else return t
    }

    const getTime = () => {
      let s=time.seconds, m=time.minutes, h=time.hours
      s++;
      if(s===60){
        s=0;
        m++;
          if(m===60){
            m=0
            h++;
            if(h===24){
              h=0
            }
          }
      }
      
      s=update(s)
      m=update(m)
      h=update(h)

      if(moves!==0)
        setTime({seconds:s, minutes:m, hours:h});
      else
        setTime({seconds:'00', minutes:'00', hours:'00'});

  }

    if(!banner)
      setTimeout(getTime, 1000)

 
    return (
      <Head>
        <PlayerName>
          <div>Player:</div>&nbsp;
          <div>{(playerName.length>10?playerName.slice(0,10)+'...':playerName)}</div> 
        </PlayerName>
        <Timer>{time.hours}:{time.minutes}:{time.seconds}</Timer>
        <MovesCount>Moves: {moves}</MovesCount>
      </Head>    
    )
}
const Head = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 22px;
  background: #002030;
  color: rgb(255, 51, 0);
`

const PlayerName = styled.div`
  font-size:20px;
  padding-left:20px;
  display:flex;
  @media (max-width:500px) {
    font-size:15px;
    padding-left:0;
    flex-direction:column;
  }

`

const Timer = styled.div`
  font-size:44px;
  display:flex;
  position:fixed;
  left:43%;
  @media (max-width:500px) {
    font-size:30px;
    left:36%;
  }
  
`

const MovesCount = styled.div`
  font-size:22px;
  padding-right:20px;

  @media (max-width:500px) {
    font-size:15px;
    padding-right:0;
  }

`


export default Header