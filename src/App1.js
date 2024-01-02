import { useEffect, useState } from 'react';

function App1() {
  var [btn, setbtn] = useState(['', '', '', '', '', '', '', '', '']);
  // var [sign, setsign] = useState('X');
  var [won, setwon] = useState('');

  var [count,setcount] = useState(0);

  let game = (n) => {

    if(won == '' && btn[n] == ''){
      btn[n] = 'X';
      setbtn([...btn]);
      setcount(count+1);
    }
    pc();

    win(0, 1, 2, 'X');
    win(3, 4, 5, 'X');
    win(6, 7, 8, 'X');
    win(0, 3, 6, 'X');
    win(1, 4, 7, 'X');
    win(2, 5, 8, 'X');
    win(0, 4, 8, 'X');
    win(2, 4, 6, 'X');

    win(0, 1, 2, 'O');
    win(3, 4, 5, 'O');
    win(6, 7, 8, 'O');
    win(0, 3, 6, 'O');
    win(1, 4, 7, 'O');
    win(2, 5, 8, 'O');
    win(0, 4, 8, 'O');
    win(2, 4, 6, 'O');

  }

  const pc = () =>{
if(count < 4){
    while(true){
    let num = Math.floor(Math.random() * 9);
    if(btn[num] == ''){
      btn[num]='O';
      setbtn([...btn]);
      break;
    }
  }
}
  }

  var win = (p1, p2, p3, s) => {
    if (btn[p1] == s && btn[p2] == s && btn[p3] == s) {
      setwon(s + ' is Win');
    }
  }

  var re = () => {
    setbtn(['', '', '', '', '', '', '', '', '']);
    setwon('');
    setcount(0);
  }

  return (
    <>
      <div className="btn wonn">
        <button className='t-btn t1' onClick={() => { game(0) }}>{btn[0]}</button>
        <button className='t-btn t1' onClick={() => { game(1) }}>{btn[1]}</button>
        <button className='t-btn t2' onClick={() => { game(2) }}>{btn[2]}</button>

        <button className='t-btn t1' onClick={() => { game(3) }}>{btn[3]}</button>
        <button className='t-btn t1' onClick={() => { game(4) }}>{btn[4]}</button>
        <button className='t-btn t2' onClick={() => { game(5) }}>{btn[5]}</button>

        <button className='t-btn t3' onClick={() => { game(6) }}>{btn[6]}</button>
        <button className='t-btn t3' onClick={() => { game(7) }}>{btn[7]}</button>
        <button className='t-btn' onClick={() => { game(8) }}>{btn[8]}</button>
      </div>

      <button className='re-btn' onClick={re}>RESET</button>

      <div className="wonn">{won}</div>
    </>
  )
}

export default App1;