import React, { useState } from 'react'
import PlusSVG from '../../Includes/img/svg/PlusSVG'

function NewToDo(props) {
    const {appData} = props

    const [input,setInput] = useState()

    const inputListener = (e) =>{
        const {name,value} = e.target
        setInput({...input, [name] : value })
        
    }

    const createNewToDo = () =>{
        const element = document.getElementById("new-ToDo-body")
        const check = element.classList.contains("closed")

        if(check){
            element.classList.remove("closed")
            element.classList.add("open")
        }else{
            element.classList.remove("open")
            element.classList.add("closed")
        }
    }

    const submit =()=>{

    }

return (
    <>

        <div className='create-new-todo relative w-[75%] mx-auto bg-white rounded mt-10 py-1'>
            <div className='new-todo-header'>
                <h2 className='text-3xl font-bold text-center w-full'>New ToDo</h2>
                <div className='absolute top-0 right-0 m-2 cursor-pointer' onClick={()=>createNewToDo()}>
                    <PlusSVG w={"30"} h={"30"}/>
                </div>
            </div>
            <div id="new-ToDo-body" className='new-todo-body relative bg-slate-100  animate-height  closed'>
                <div className='content mx-4 mt-7 '>
                    <div className='prefs flex mb-5'>
                        <div className='w-1/2'>
                            <input type='text' name="title" className='border border-black rounded'placeholder='Titel'/>
                        </div>
                        <div className='w-1/3'>
                            <input type="date" name="date" className='border border-black rounded' placeholder='Date'/>
                        </div>
                        <div className='w-1/5 text-right' name="prio">
                            <select className='rounded'>
                                <option>Prio</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </div>
                    <div className='task-content mt-6'>
                        <textarea className=' w-full' name='task' rows="2" placeholder='Please insert here your Task'/>
                    </div>
                    <div className='submit text-center mt-5'>
                        <button className='btn' onClick={()=>submit()}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default NewToDo