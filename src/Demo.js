import { useState } from "react"

const Demo = () => {

    const [task,settask]=useState()
    const [alltask,setalltask]=useState([]);

    const [editId,seteditId]=useState();
    const [isEdit,setisEdit]=useState(false)

    const editTask = (eId) => {

        seteditId(eId)
        setisEdit(true)
        const upData=alltask[eId]
        settask(upData)
    }

    const dltTask = (dltId) => {

        let newData = alltask.filter((i,j)=>{ return j !== dltId })
        setalltask(newData)

    }

    const add_task = () => {

        if(isEdit){
            let newData = [...alltask];
            newData[editId]=task;
            setalltask(newData);
            settask('');
            setisEdit(false)
        }
        else{
            setalltask([...alltask,task])
            settask(''); 
        }
    }

    return(
        <>
        
            <input type="text" name="" value={task} onChange={(e)=>{settask(e.target.value)}} />
            <input type="button" value={(isEdit) ? 'Edit' : 'add_task'} onClick={add_task} />    

            <ul>
                {
                    alltask.map((item,ind)=>{
                        return(
                            <li> 
                                {item} 
                                <button onClick={()=>{dltTask(ind)}}>Delete</button>
                                <button onClick={()=>{editTask(ind)}}>Update</button>
                            </li>
                        )
                    })
                }
            </ul>

        </>
    )

} 

export default Demo