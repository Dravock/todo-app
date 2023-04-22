import React  from 'react'
import PlusSVG from '../../Includes/img/svg/PlusSVG'

function NewToDo(props) {
    const { submit,inputListener,input } = props

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



return (
    <>

        <div className='create-new-todo relative w-[95%] sm:w-[75%] mx-auto bg-white rounded mt-10 py-1'>
            <div className='new-todo-header'>
                <h2 className='text-3xl font-bold text-center w-full'>New ToDo</h2>
                <div className='absolute top-0 right-0 m-2 cursor-pointer' onClick={()=>createNewToDo()}>
                    <PlusSVG w={"30"} h={"30"}/>
                </div>
            </div>
            <div id="new-ToDo-body" className='new-todo-body relative bg-slate-100  animate-height  closed'>
                <div className='content mx-4 mt-7 '>
                    <div className='prefs sm:flex mb-5'>
                        <div className='w-1/2 mb-2 sm:mb-0'>
                            <input type='text' name="title" className='border border-black rounded'placeholder='Titel' onChange={inputListener}/>
                        </div>
                        <div className='w-1/3 mb-2 sm:mb-0'>
                            <input type="date" name="date" className='border border-black rounded' placeholder='Date' onChange={inputListener}/>
                        </div>
                        <div className='w-1/5 text-right'>
                            <select className='rounded'  name="prio" onChange={inputListener}>
                                <option>Prio</option>
                                <option value={"1"}>1</option>
                                <option value={"2"}>2</option>
                                <option value={"3"}>3</option>
                            </select>
                        </div>
                    </div>
                    <div className='task-content mt-6'>
                        <textarea className=' w-full resize-none' name='task' rows="2" placeholder='Please insert here your Task' onChange={inputListener}/>
                    </div>
                    <div className='submit text-center mt-5'>
                        <button className='btn' onClick={()=>submit(input)}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>
)}

export default NewToDo