import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";

function Todo() {

    var [task, settask] = useState('');
    var [tasks, settasks] = useState([]);
    var [is_edit, setis_edit] = useState('');
    var [edit_id, setedit_id] = useState('');

    var add_task = () => {
        if (is_edit) {
            let newdata = [...tasks];
            newdata[edit_id]=task;
            settasks(newdata);
            settask('');
            setis_edit(false)
        }
        else {
            settasks([...tasks, task]);
            settask('');
        }
    }

    var dettask = (d_id) => {
        let newdata = tasks.filter((i, j) => { return j !== d_id });
        settasks(newdata);
    }

    var retask = (r_id) => {
        setedit_id(r_id);
        setis_edit(true);
        let updata = tasks[r_id];
        settask(updata);
    }
return (
    <div className="bg">
        <div className="todo-bg">
            <div className="head">What's the Plan for Today?</div>
            <div className="t-input-bg">
                <input type="text" className="t-input" placeholder="Add a Todo" value={task} onChange={(a) => { settask(a.target.value) }} /><button className="t-input-btn" onClick={add_task}>{(is_edit) ? 'Edit Todo' : 'Add Todo'}</button></div>

            <ul className="t_list_bg1">
                {
                    tasks.map((item, ind) => {
                        return (
                            <li className="t_list_bg">
                                <div className="t_list">{item} <button className="t_de_btn" onClick={() => { dettask(ind) }}><FaDeleteLeft /></button> <button className="t_re_btn" onClick={() => { retask(ind) }} ><RxUpdate /></button> </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
)
}

export default Todo;