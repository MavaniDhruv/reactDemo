import { useState } from 'react';

function App2() {
  var [t1, sett1] = useState('');
  var [t2, sett2] = useState('');
  var [t3, sett3] = useState('');
  var [t4, sett4] = useState('');
  var [t5, sett5] = useState('');
  var [t6, sett6] = useState('');
  var [t7, sett7] = useState('');
  var [t8, sett8] = useState('');
  var [t9, sett9] = useState('');

  var [count, setcount] = useState(0);

  var [won, setwon] = useState('');

  var a1 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett1('X');
        setcount(1);
        wiin();
      }
      else {
        sett1('O');
        setcount(0);
        wiin();
      }
    }
  }

  var a2 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett2('X');
        setcount(1);
      }
      else {
        sett2('O');
        setcount(0);
      }
      wiin();
    }
  }

  var a3 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett3('X');
        setcount(1);
      }
      else {
        sett3('O');
        setcount(0);
      }
      wiin();
    }
  }

  var a4 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett4('X');
        setcount(1);
      }
      else {
        sett4('O');
        setcount(0);
      }
      wiin();
    }
  }

  var a5 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett5('X');
        setcount(1);
      }
      else {
        sett5('O');
        setcount(0);
      }
      wiin();
    }
  }

  var a6 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett6('X');
        setcount(1);
      }
      else {
        sett6('O');
        setcount(0);
      }
      wiin();
    }
  }

  var a7 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett7('X');
        setcount(1);
      }
      else {
        sett7('O');
        setcount(0);
      }
      wiin();
    }
  }

  var a8 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett8('X');
        setcount(1);
      }
      else {
        sett8('O');
        setcount(0);
      }
      wiin();
    }
  }

  var a9 = (a) => {
    if (a == '' && won == '') {
      if (count == 0) {
        sett9('X');
        setcount(1);
      }
      else {
        sett9('O');
        setcount(0);
      }
      wiin();
    }
  }

  function wiin(e) {
    if (t1 == "X" && t2 == "X" && t3 == "X" || t1 == "X" && t4 == "X" && t7 == "X" || t1 == "X" && t5 == "X" && t9 == "X" ||
      t2 == "X" && t5 == "X" && t8 == "X" || t3 == "X" && t5 == "X" && t7 == "X" || t3 == "X" && t6 == "X" && t9 == "X" || t4 == "X" && t5 == "X" && t6 == "X" || t7 == "X" && t8 == "X" && t9 == "X" || t1 == "O" && t2 == "O" && t3 == "O" || t1 == "O" && t4 == "O" && t7 == "O" || t1 == "O" && t5 == "O" && t9 == "O" || t2 == "O" && t5 == "O" && t8 == "O" || t3 == "O" && t5 == "O" && t7 == "O" || t3 == "O" && t6 == "O" && t9 == "O" || t4 == "O" && t5 == "O" && t6 == "O" || t7 == "O" && t8 == "O" && t9 == "O") {
      console.log('you win');
      setwon("You Win");
    }
  }

  var re = () => {
    sett1('');
    sett2('');
    sett3('');
    sett4('');
    sett5('');
    sett6('');
    sett7('');
    sett8('');
    sett9('');
    setwon('');
  }
  return (
    <>
      <div className="btn">
        <button className='t-btn t1' value={t1} onClick={(a) => { a1(a.target.value) }}>{t1}</button>
        <button className='t-btn t1' value={t2} onClick={(a) => { a2(a.target.value) }}>{t2}</button>
        <button className='t-btn t2' value={t3} onClick={(a) => { a3(a.target.value) }}>{t3}</button>

        <button className='t-btn t1' value={t4} onClick={(a) => { a4(a.target.value) }}>{t4}</button>
        <button className='t-btn t1' value={t5} onClick={(a) => { a5(a.target.value) }}>{t5}</button>
        <button className='t-btn t2' value={t6} onClick={(a) => { a6(a.target.value) }}>{t6}</button>

        <button className='t-btn t3' value={t7} onClick={(a) => { a7(a.target.value) }}>{t7}</button>
        <button className='t-btn t3' value={t8} onClick={(a) => { a8(a.target.value) }}>{t8}</button>
        <button className='t-btn' value={t9} onClick={(a) => { a9(a.target.value) }}>{t9}</button>
      </div>

      <button className='re-btn' onClick={re}>RESET</button>

      <div className="wonn">{won}</div>
    </>
  )
}

export default App2;