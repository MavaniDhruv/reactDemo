import { useState } from 'react';

function Cal1() {

    const [data, setdata] = useState(1);

    const [text, settext] = useState('');
    // const gettext = (a) =>{
    //     settext(a)
    // }

    var [no1, setno1] = useState(0);
    var [no2, setno2] = useState(0);
    var [total, settotal] = useState(0);

    var add = () => {
        settotal(parseInt(no1) + parseInt(no2));
    }
    const sub = () => {
        settotal(parseInt(no1) - parseInt(no2));
    }
    const mul = () => {
        settotal(parseInt(no1) * parseInt(no2));
    }
    const div = () => {
        settotal(parseInt(no1) / parseInt(no2));
    }

    return (
        <>

            <div className="counter">
                <button onClick={() => { setdata((data > 1) ? data - 1 : data) }} className='count-btn'> - </button>
                <h1 className='count-dis'>{data}</h1>
                <button onClick={() => { setdata(data + 1) }} className='count-btn'> + </button>
            </div>


            {/* <div>
                <h1>Text : {text}</h1>
                <input type="text" onChange={(a) => { settext(a.target.value) }} />
                <input type="text" value={text} />
            </div> */}

            <br />
            <br />

 
            <div className="cal-bg">
                <input type="number" className='cal-dis' onChange={(x) => { setno1(x.target.value) }} /> <br />
                <input type="number" className='cal-dis' onChange={(y) => { setno2(y.target.value) }} />
                <div className='cal-dis cal-dis1'>{total}</div>

                <button className='count-btn' onClick={add}>+</button>
                <button className='count-btn' onClick={sub}>-</button>
                <button className='count-btn' onClick={mul}>*</button>
                <button className='count-btn' onClick={div}>/</button>
            </div>

        </>
    )
}

export default Cal1;