import { useState } from 'react';

function Cal2() {

    var [dis, setdis] = useState('');
    var [no, setno] = useState('');
    var [sign, setsign] = useState('');


    var val = (a) => {
        setdis(dis+a);
    }

    var action = (b) => {
        setno(dis);
        setdis('');
        setsign(b);
    }

    var total = () => {
        var t;
        if(sign === '+'){
            t = parseInt(no)+parseInt(dis);
        }
        if(sign === '-'){
            t = parseInt(no)-parseInt(dis);
        }
        if(sign === '*'){
            t = parseInt(no)*parseInt(dis);
        }
        if(sign === '/'){
            t = parseInt(no)/parseInt(dis);
        }
        setdis(t);
    }

    var back = () => {
        setdis(dis.substr(0,(dis.length)-1));
    }

    return (
            <div className="c-bg">
                <input type="text" className='c-dis' disabled value={dis} />

                <div className="c-btn-bg1">
                    <button className='c-btn' onClick={back}>➜</button>
                    <button className='c-btn' onClick={()=>{setdis('')}}>C</button>
                </div>

                <div className="c-btn-bg">
                    <button className='c-btn' value={7} onClick={(a)=>{val(a.target.value)}}>7</button>
                    <button className='c-btn' value={8} onClick={(a)=>{val(a.target.value)}}>8</button>
                    <button className='c-btn' value={9} onClick={(a)=>{val(a.target.value)}}>9</button>
                    <button className='c-btn' value={'/'} onClick={(b)=>{action(b.target.value)}}>/</button>
 
                    <button className='c-btn' value={4} onClick={(a)=>{val(a.target.value)}}>4</button>
                    <button className='c-btn' value={5} onClick={(a)=>{val(a.target.value)}}>5</button>
                    <button className='c-btn' value={6} onClick={(a)=>{val(a.target.value)}}>6</button>
                    <button className='c-btn' value={'*'} onClick={(b)=>{action(b.target.value)}}>*</button>
 
                    <button className='c-btn' value={1} onClick={(a)=>{val(a.target.value)}}>1</button>
                    <button className='c-btn' value={2} onClick={(a)=>{val(a.target.value)}}>2</button>
                    <button className='c-btn' value={3} onClick={(a)=>{val(a.target.value)}}>3</button>
                    <button className='c-btn' value={'-'} onClick={(b)=>{action(b.target.value)}}>-</button>

                    <button className='c-btn' value={0} onClick={(a)=>{val(a.target.value)}}>0</button>
                    <button className='c-btn' value={'00'} onClick={(a)=>{val(a.target.value)}}>00</button>
                    <button className='c-btn' onClick={total}>=</button>
                    <button className='c-btn' value={'+'} onClick={(b)=>{action(b.target.value)}}>+</button>
                </div>
            </div>
    )
}

export default Cal2;